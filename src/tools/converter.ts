import html2canvas, { Options as Html2CanvasOptions } from 'html2canvas-pro';
import jsPDF, { jsPDFOptions } from 'jspdf';
import { RefObject } from 'react';

export enum Resolution {
  LOW = 1,
  NORMAL = 2,
  MEDIUM = 3,
  HIGH = 7,
  EXTREME = 12,
}

export enum Margin {
  NONE = 0,
  SMALL = 5,
  MEDIUM = 10,
  LARGE = 25,
}

export const MM_TO_PX = 3.77952755906;

export const DEFAULT_OPTIONS: Readonly<ConversionOptions> = {
  method: 'save',
  resolution: Resolution.MEDIUM,
  page: {
    margin: Margin.NONE,
    format: 'A4',
    orientation: 'portrait',
  },
  canvas: {
    mimeType: 'image/jpeg',
    qualityRatio: 1,
    useCORS: true,
    logging: false,
  },
  overrides: {},
};

export type DetailedMargin = {
  top: Margin | number;
  right: Margin | number;
  bottom: Margin | number;
  left: Margin | number;
};

type PageConversionOptions = {
  margin: DetailedMargin | Margin | number;
  format: jsPDFOptions['format'];
  orientation: jsPDFOptions['orientation'];
};

type CanvasConversionOptions = Pick<Html2CanvasOptions, 'useCORS' | 'logging'> & {
  mimeType: 'image/jpeg' | 'image/png';
  qualityRatio: number;
};

export type ConversionOptions = {
  filename?: string;
  method: 'save' | 'open' | 'build';
  resolution: Resolution | number;
  page: PageConversionOptions;
  canvas: CanvasConversionOptions;
  overrides: {
    pdf?: Partial<jsPDFOptions>;
    canvas?: Partial<Html2CanvasOptions>;
  };
};

export type Options = Omit<Partial<ConversionOptions>, 'page' | 'canvas' | 'overrides'> & {
  page?: Partial<PageConversionOptions>;
  canvas?: Partial<CanvasConversionOptions>;
  overrides?: Partial<ConversionOptions['overrides']>;
};

export type TargetElementFinder = RefObject<HTMLElement | null> | (() => HTMLElement | null);

export class Converter {
  pdf: InstanceType<typeof jsPDF>;

  constructor(
    private canvas: HTMLCanvasElement,
    private options: ConversionOptions
  ) {
    this.pdf = new jsPDF({
      format: this.options.page.format,
      orientation: this.options.page.orientation,
      ...this.options.overrides?.pdf,
      unit: 'mm',
    });
  }
  getMarginTopMM() {
    const margin =
      typeof this.options.page.margin === 'object' ? this.options.page.margin.top : this.options.page.margin;
    return Number(margin);
  }
  getMarginLeftMM() {
    const margin =
      typeof this.options.page.margin === 'object' ? this.options.page.margin.left : this.options.page.margin;
    return Number(margin);
  }
  getMarginRightMM() {
    const margin =
      typeof this.options.page.margin === 'object' ? this.options.page.margin.right : this.options.page.margin;
    return Number(margin);
  }
  getMarginBottomMM() {
    const margin =
      typeof this.options.page.margin === 'object' ? this.options.page.margin.bottom : this.options.page.margin;
    return Number(margin);
  }
  getMarginTop() {
    return this.getMarginTopMM() * MM_TO_PX;
  }
  getMarginBottom() {
    return this.getMarginBottomMM() * MM_TO_PX;
  }
  getMarginLeft() {
    return this.getMarginLeftMM() * MM_TO_PX;
  }
  getMarginRight() {
    return this.getMarginRightMM() * MM_TO_PX;
  }
  getScale() {
    return this.options.resolution;
  }
  getPageHeight() {
    return this.getPageHeightMM() * MM_TO_PX;
  }
  getPageHeightMM() {
    return this.pdf.internal.pageSize.height;
  }
  getPageWidthMM() {
    return this.pdf.internal.pageSize.width;
  }
  getPageWidth() {
    return this.getPageWidthMM() * MM_TO_PX;
  }
  getOriginalCanvasWidth() {
    return this.canvas.width / this.getScale();
  }
  getOriginalCanvasHeight() {
    return this.canvas.height / this.getScale();
  }
  getCanvasPageAvailableHeight() {
    return this.getPageAvailableHeight() * this.getScale() * this.getHorizontalFitFactor();
  }
  getPageAvailableWidth() {
    return this.getPageWidth() - (this.getMarginLeft() + this.getMarginRight());
  }
  getPageAvailableHeight() {
    return this.getPageHeight() - (this.getMarginTop() + this.getMarginBottom());
  }
  getPageAvailableWidthMM() {
    return this.getPageAvailableWidth() / MM_TO_PX;
  }
  getPageAvailableHeightMM() {
    return this.getPageAvailableHeight() / MM_TO_PX;
  }
  getNumberPages() {
    return Math.ceil(this.canvas.height / this.getCanvasPageAvailableHeight());
  }
  getHorizontalFitFactor() {
    if (this.getPageAvailableWidth() < this.getOriginalCanvasWidth()) {
      return this.getOriginalCanvasWidth() / this.getPageAvailableWidth();
    }
    return 1;
  }
  getCanvasOffsetY(pageNumber: number) {
    return this.getCanvasPageAvailableHeight() * (pageNumber - 1);
  }
  getCanvasHeightLeft(pageNumber: number) {
    return this.canvas.height - this.getCanvasOffsetY(pageNumber);
  }
  getCanvasPageHeight(pageNumber: number) {
    if (this.canvas.height < this.getCanvasPageAvailableHeight()) {
      return this.canvas.height;
    }
    const canvasHeightPending = this.getCanvasHeightLeft(pageNumber);
    return canvasHeightPending < this.getCanvasPageAvailableHeight()
      ? canvasHeightPending
      : this.getCanvasPageAvailableHeight();
  }
  getCanvasPageWidth() {
    return this.canvas.width;
  }
  createCanvasPage(pageNumber: number): HTMLCanvasElement {
    const canvasPageWidth = this.getCanvasPageWidth();
    const canvasPageHeight = this.getCanvasPageHeight(pageNumber);
    const canvasPage = document.createElement('canvas');
    canvasPage.setAttribute('width', String(canvasPageWidth));
    canvasPage.setAttribute('height', String(canvasPageHeight));
    const ctx = canvasPage.getContext('2d');
    ctx?.drawImage(
      this.canvas,
      0,
      this.getCanvasOffsetY(pageNumber),
      this.canvas.width,
      canvasPageHeight,
      0,
      0,
      this.canvas.width,
      canvasPageHeight
    );
    return canvasPage;
  }
  convert(): InstanceType<typeof jsPDF> {
    let pageNumber = 1;
    const numberPages = this.getNumberPages();
    while (pageNumber <= numberPages) {
      if (pageNumber > 1) {
        this.pdf.addPage(this.options.page.format, this.options.page.orientation);
      }
      const canvasPage = this.createCanvasPage(pageNumber);
      const pageImageDataURL = canvasPage.toDataURL(this.options.canvas.mimeType, this.options.canvas.qualityRatio);
      this.pdf.setPage(pageNumber);
      this.pdf.addImage({
        imageData: pageImageDataURL,
        width: canvasPage.width / (this.getScale() * MM_TO_PX * this.getHorizontalFitFactor()),
        height: canvasPage.height / (this.getScale() * MM_TO_PX * this.getHorizontalFitFactor()),
        x: this.getMarginLeftMM(),
        y: this.getMarginTopMM(),
      });
      pageNumber += 1;
    }
    return this.pdf;
  }
}

export const buildConvertOptions = (options?: Options): ConversionOptions => {
  if (!options) {
    return DEFAULT_OPTIONS;
  }
  return {
    ...DEFAULT_OPTIONS,
    ...options,
    canvas: { ...DEFAULT_OPTIONS.canvas, ...options.canvas },
    page: { ...DEFAULT_OPTIONS.page, ...options.page },
  };
};

const getTargetElement = (targetRefOrFunction: TargetElementFinder): HTMLElement | null | undefined => {
  if (typeof targetRefOrFunction === 'function') {
    return targetRefOrFunction();
  }
  return targetRefOrFunction?.current;
};

export const generatePDF = async (
  targetRefOrFunction: TargetElementFinder,
  customOptions?: Options
): Promise<InstanceType<typeof jsPDF> | undefined> => {
  const options = buildConvertOptions(customOptions);
  const targetElement = getTargetElement(targetRefOrFunction);
  if (!targetElement) {
    console.error('Unable to get the target element.');
    return;
  }

  targetElement.style.height = '2545px'; // TODO: calc height
  const canvas = await html2canvas(targetElement, {
    useCORS: options.canvas.useCORS,
    logging: options.canvas.logging,
    scale: options.resolution,
    ...options.overrides?.canvas,
  });
  targetElement.style = undefined!;

  const converter = new Converter(canvas, options);
  const pdf = converter.convert();
  switch (options.method) {
    case 'build':
      return pdf;
    case 'open': {
      window.open(pdf.output('bloburl'), '_blank');
      return pdf;
    }
    case 'save':
    default: {
      const pdfFilename = options.filename ?? `${new Date().getTime()}.pdf`;
      await pdf.save(pdfFilename, { returnPromise: true });
      return pdf;
    }
  }
};
