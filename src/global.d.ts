/// <reference types="svelte" />

declare namespace svelte.JSX {
  interface HTMLProps<T> {
    onclick_outside?: (e: CustomEvent) => void;
  }
}

declare module '*.svelte' {
  export { SvelteComponentDev as default } from 'svelte/internal';
  export interface Colors {
    selected?: string;
    inRange?: string;
    selectedText: string;
    text?: string;
    inRangeBorder?: string;
    disabled?: string;
    hoveredInRange?: string;
  }

  export interface Texts {
    apply?: string;
    cancel?: string;
    keyboardShortcuts?: string;
  }

  export interface Keys {
    arrowDown?: number;
    arrowUp?: number;
    arrowRight?: number;
    arrowLeft?: number;
    enter?: number;
    pgUp?: number;
    pgDn?: number;
    end?: number;
    home?: number;
    questionMark?: number;
    esc?: number;
  }

  export interface DatepickerOptions {
    ariaLabels?: any;
    keyboardShortcuts?: any[];
    dateLabelFormat?: string;
    sundayFirst?: boolean;
    colors?: Colors;
    monthNames?: string[];
    days?: string[];
    daysShort?: string[];
    texts?: Texts;
  }

  export const datepickerConfig: DatepickerOptions;
}
