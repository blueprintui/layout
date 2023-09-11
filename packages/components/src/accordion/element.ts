import { html, LitElement } from 'lit';
import { property } from 'lit/decorators/property.js';
import { baseStyles, BpTypeElement } from '@blueprintui/components/internals';
import styles from './element.css' assert { type: 'css' };

/**
 *
 * ```javascript
 * import '@blueprintui/components/include/accordion.js';
 * ```
 *
 * ```html
 * <bp-accordion>
 *   <bp-accordion-panel expanded>
 *     <bp-accordion-header>Item 1</bp-accordion-header>
 *     <bp-accordion-content>Content 1</bp-accordion-content>
 *   </bp-accordion-panel>
 *   <bp-accordion-panel>
 *     <bp-accordion-header>Item 2</bp-accordion-header>
 *     <bp-accordion-content>Content 2</bp-accordion-content>
 *   </bp-accordion-panel>
 *   <bp-accordion-panel disabled>
 *     <bp-accordion-header>Item 3</bp-accordion-header>
 *     <bp-accordion-content>Content 3</bp-accordion-content>
 *   </bp-accordion-panel>
 * </bp-accordion>
 * ```
 *
 * @element bp-accordion
 * @since 1.0.0
 * @slot - slot for accordion panels
 * @cssprop --border-color
 * @cssprop --border-width
 * @cssprop --border-radius
 */
export class BpAccordion extends LitElement implements Pick<BpTypeElement, keyof BpAccordion> {
  /** determines the visual layer style (container vs flat for nesting) */
  @property({ type: String, reflect: true }) accessor layer: 'flat' | 'container' = 'container';

  static styles = [baseStyles, styles];

  render() {
    return html` <div part="internal">
      <slot name="accordion-panel"></slot>
    </div>`;
  }
}
