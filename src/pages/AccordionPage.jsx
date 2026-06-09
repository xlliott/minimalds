/* ============================================================
   MinimalDS — Accordion Page
   ============================================================ */

.mds-page-accordion {
  max-width: 800px;
}

/* --- Header --- */

.mds-page-accordion__header {
  margin-bottom: var(--space-layout-2xl);
}

.mds-page-accordion__title {
  font-family:  var(--font-family-display);
  font-size:    var(--font-size-desktop-h1);
  font-weight:  var(--font-weight-strong);
  color:        var(--color-text-default);
  line-height:  1.2;
  margin:       0 0 var(--space-layout-sm);
  -webkit-font-smoothing: antialiased;
}

.mds-page-accordion__subtitle {
  font-family:  var(--font-family-heading);
  font-size:    var(--font-size-desktop-h4);
  font-weight:  var(--font-weight-regular);
  color:        var(--color-text-default);
  line-height:  1.5;
  margin:       0 0 var(--space-layout-sm);
}

.mds-page-accordion__figma-link {
  display:               inline-block;
  font-family:           var(--font-family-global);
  font-size:             var(--font-size-body);
  font-weight:           var(--font-weight-strong);
  color:                 var(--color-text-default);
  text-decoration:       underline;
  text-underline-offset: 2px;
}

/* --- Interactive preview panel --- */

.mds-page-accordion__panel {
  border:        var(--border-default) solid var(--color-border-default);
  border-radius: var(--radius-card);
  overflow:      hidden;
  margin-bottom: var(--space-layout-2xl);
}

.mds-page-accordion__controls {
  display:       flex;
  flex-direction: row;
  border-bottom: var(--border-default) solid var(--color-border-default);
}

.mds-page-accordion__controls .mds-dropdown {
  flex:          1;
  width:         auto;
  border-radius: 0;
}

.mds-page-accordion__controls .mds-dropdown__field {
  border:        none;
  border-radius: 0;
  width:         100%;
}

.mds-page-accordion__controls .mds-dropdown:not(:last-child) {
  border-right: var(--border-default) solid var(--color-border-default);
}

.mds-page-accordion__controls-spacer {
  flex:         1;
  border-right: var(--border-default) solid var(--color-border-default);
}

.mds-page-accordion__controls-spacer:last-child {
  border-right: none;
}

.mds-page-accordion__preview {
  background-color: var(--color-surface-default);
  padding:          85px var(--space-layout-2xl);
  display:          flex;
  align-items:      center;
  justify-content:  center;
}

.mds-page-accordion__preview > * {
  width: 400px;
}

/* --- Sections --- */

.mds-page-accordion__section {
  padding: var(--space-layout-2xl) 0;
}

.mds-page-accordion__section-title {
  font-family:  var(--font-family-heading);
  font-size:    var(--font-size-desktop-h3);
  font-weight:  var(--font-weight-strong);
  color:        var(--color-text-default);
  line-height:  1.2;
  margin:       0 0 var(--space-component-md);
  -webkit-font-smoothing: antialiased;
}

.mds-page-accordion__body {
  font-family:  var(--font-family-global);
  font-size:    var(--font-size-body);
  font-weight:  var(--font-weight-regular);
  color:        var(--color-text-default);
  line-height:  1.5;
  margin:       0 0 var(--space-component-lg);
}

.mds-page-accordion__body:last-of-type {
  margin-bottom: 0;
}

/* --- Usage guidelines --- */

.mds-page-accordion__usage {
  display:    flex;
  gap:        var(--space-layout-md);
  margin-top: var(--space-layout-md);
}

.mds-page-accordion__usage > * {
  flex: 1;
}

/* --- State panels --- */

.mds-page-accordion__state-panel {
  background-color: var(--color-surface-default);
  border:           var(--border-default) solid var(--color-border-default);
  display:          flex;
  align-items:      center;
  justify-content:  center;
  padding:          85px var(--space-layout-2xl);
  margin-top:       var(--space-layout-lg);
}

.mds-page-accordion__state-panel > * {
  width: 400px;
}
