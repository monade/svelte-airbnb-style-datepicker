export const debounce = (func: () => void, wait: number, immediate?: boolean) => {
  let timeout: number = 0;
  return function () {
    const context = this,
      args = arguments as any;
    const later = function () {
      timeout = 0;
      if (!immediate) func.apply(context, args);
    };
    const callNow = immediate && !timeout;
    window.clearTimeout(timeout);
    timeout = window.setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
};

export const copyObject = (obj: any) => {
  return JSON.parse(JSON.stringify(obj));
};

export const findAncestor = (element: HTMLElement | null, selector: string) => {
  if (!element) {
    return null;
  }
  if (typeof element.closest === 'function') {
    return element.closest(selector) || null;
  }
  while (element) {
    if (element.matches(selector)) {
      return element;
    }
    element = element.parentElement;
  }
  return null;
};

export const randomString = (length: number) => {
  let text = '';
  const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  for (let i = 0; i < length; i++) {
    text += possible.charAt(Math.floor(Math.random() * possible.length));
  }
  return text;
};
