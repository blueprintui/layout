export const metadata = {
  name: 'popover',
  elements: ['bp-popover']
};

export function example() {
  return /* html */`
  <bp-button popovertarget="popover">Open Popover</bp-button>
  <bp-popover id="popover" position="right-end">hello there</bp-popover>

  <script type="module">
    import '@blueprintui/components/include/popover.js';
    import '@blueprintui/components/include/button.js';
  </script>
  <style>
    body {
      display: flex;
      place-content: center;
      place-items: center;
    }
  </style>
`;
}

export function nested() {
  return /* html */`
  <div bp-layout="grid cols:6 gap:md">
    <div bp-layout="block gap:md">
      <bp-field>
        <label>search</label>
        <bp-search value="text"></bp-search>
      </bp-field>
      <bp-field>
        <label>select</label>
        <bp-select>
          <bp-option value="1" checked>option 1</bp-option>
          <bp-option value="2">option 2</bp-option>
          <bp-option value="3">option 3</bp-option>
        </bp-select>
      </bp-field>
    </div>
    <bp-card>
      <div bp-layout="block gap:md">
        <bp-field>
          <label>search</label>
          <bp-search value="text"></bp-search>
        </bp-field>
        <bp-field>
          <label>select</label>
          <bp-select>
            <bp-option value="1" checked>option 1</bp-option>
            <bp-option value="2">option 2</bp-option>
            <bp-option value="3">option 3</bp-option>
          </bp-select>
        </bp-field>
      </div>
    </bp-card>
  </div>

  <bp-button popovertarget="dialog-popover">dialog</bp-button>
  <bp-dialog id="dialog-popover" modal closable>
    <bp-button popovertarget="dropdown-popover" id="dropdown-btn">dropdown</bp-button>
    <bp-dropdown id="dropdown-popover" anchor="dropdown-btn" position="top" style="--width: 250px; --min-width: fit-conent;">
      <bp-field>
        <label>search</label>
        <bp-search value="text" id="search">
          <bp-button-icon slot="suffix" id="tooltip-btn" popovertarget="tooltip-popover" action="inline"></bp-button-icon>
        </bp-search>
      </bp-field><br />

      <bp-field>
        <label>select</label>
        <bp-select>
          <bp-option value="1" checked>option 1</bp-option>
          <bp-option value="2">option 2</bp-option>
          <bp-option value="3">option 3</bp-option>
        </bp-select>
      </bp-field>
      <bp-tooltip anchor="tooltip-btn" trigger="tooltip-btn" position="right">tooltip</bp-tooltip>
    </bp-dropdown>

  </bp-dialog>
`;
}

export function alignment() {
  return /* html */`
    <style>
      html, body {
        height: 100%;
      }
    </style>
    <div style="min-height: 100%; width: 100%; display: flex; align-items: center; justify-content: center;">
      <bp-popover popover="manual" anchor="card" position="center">center</bp-popover>
      <bp-popover popover="manual" anchor="card" arrow position="top-start">top-start</bp-popover>
      <bp-popover popover="manual" anchor="card" arrow position="top">top</bp-popover>
      <bp-popover popover="manual" anchor="card" arrow position="top-end">top-end</bp-popover>
      <bp-popover popover="manual" anchor="card" arrow position="right-start">right-start</bp-popover>
      <bp-popover popover="manual" anchor="card" arrow position="right">right</bp-popover>
      <bp-popover popover="manual" anchor="card" arrow position="right-end">right-end</bp-popover>
      <bp-popover popover="manual" anchor="card" arrow position="bottom-start">bottom-start</bp-popover>
      <bp-popover popover="manual" anchor="card" arrow position="bottom">bottom</bp-popover>
      <bp-popover popover="manual" anchor="card" arrow position="bottom-end">bottom-end</bp-popover>
      <bp-popover popover="manual" anchor="card" arrow position="left-start">left-start</bp-popover>
      <bp-popover popover="manual" anchor="card" arrow position="left">left</bp-popover>
      <bp-popover popover="manual" anchor="card" arrow position="left-end">left-end</bp-popover>

      <bp-popover popover="manual" position="center">center</bp-popover>
      <bp-popover popover="manual" position="top-start">top-start</bp-popover>  
      <bp-popover popover="manual" position="top">top</bp-popover>
      <bp-popover popover="manual" position="top-end">top-end</bp-popover>
      <bp-popover popover="manual" position="right-start">right-start</bp-popover>
      <bp-popover popover="manual" position="right">right</bp-popover>
      <bp-popover popover="manual" position="right-end">right-end</bp-popover>
      <bp-popover popover="manual" position="bottom-start">bottom-start</bp-popover>
      <bp-popover popover="manual" position="bottom">bottom</bp-popover>
      <bp-popover popover="manual" position="bottom-end">bottom-end</bp-popover>
      <bp-popover popover="manual" position="left-start">left-start</bp-popover>
      <bp-popover popover="manual" position="left">left</bp-popover>
      <bp-popover popover="manual" position="left-end">left-end</bp-popover>
      <bp-card id="card" style="width: 500px; height: 350px"></bp-card>
    </div>
    <script type="module">
      import '@blueprintui/components/include/popover.js';
      Array.from(document.querySelectorAll('bp-popover')).forEach(i => {
        i.showPopover();
      });
    </script>
  `;
}

export function types() {
  return /* html */`
  <div bp-layout="inline gap:sm center" style="height: calc(100vh - 48px)">
    <bp-button popovertarget="tooltip" id="tooltip-btn">tooltip</bp-button>
    <bp-button popovertarget="toast" id="toast-btn">toast</bp-button>
    <bp-button popovertarget="dropdown" id="dropdown-btn">dropdown</bp-button>
    <bp-button popovertarget="dialog">dialog</bp-button>
    <bp-button popovertarget="drawer">drawer</bp-button>
  </div>
  <bp-tooltip id="tooltip" anchor="tooltip-btn" trigger="tooltip-btn">tooltip</bp-tooltip>
  <bp-toast id="toast" position="bottom" closable>toast</bp-toast>
  <bp-dropdown id="dropdown" anchor="dropdown-btn" closable>dropdown</bp-dropdown>
  <bp-dialog id="dialog" modal closable>dialog</bp-dialog>
  <bp-drawer id="drawer" closable>drawer</bp-drawer>

  <script type="module">
    import '@blueprintui/components/include/button.js';
    import '@blueprintui/components/include/tooltip.js';
    import '@blueprintui/components/include/toast.js';
    import '@blueprintui/components/include/dropdown.js';
    import '@blueprintui/components/include/dialog.js';
    import '@blueprintui/components/include/drawer.js';
  </script>
  `;
}