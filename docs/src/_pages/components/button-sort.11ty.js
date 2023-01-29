import schema from '../../../../packages/components/dist/drafter/schema.json';
import { getImport, getExample, getAPI } from '../../_includes/utils/index.js';

export const data = {
  title: 'Button Sort',
  aria: 'https://www.w3.org/WAI/ARIA/apg/patterns/button/',
  schema: schema.find(c => c.name === 'button-sort')
};

export function render() {
  return /* markdown */`
The sort button component is used to allow users to sort a list of items by a specific criteria. It is typically used in tables, lists, or other data focused components.
The sort button should have a clear and descriptive label that communicates the criteria by which the list is sorted, such as "Sort by Name" or "Sort by Date".

${getExample(data.schema, 'example')}

${getExample(data.schema, 'disabled')}

${getImport(data.schema)}

## Accessibility
- Use clear, descriptive labels for the button that communicates its purpose.
- Use aria-label or aria-labelledby to provide a text description of the icon for screen readers.
- Provide a way for keyboard users to interact with the button, such as by using the tab key.
- Provide clear feedback on the sorted criteria and order, such as through the use of an icon or label.

${getAPI(data.schema)}
`;
}
