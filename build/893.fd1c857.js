"use strict";(self.webpackChunk_JUPYTERLAB_CORE_OUTPUT=self.webpackChunk_JUPYTERLAB_CORE_OUTPUT||[]).push([[893],{30893:(e,t,o)=>{o.r(t),o.d(t,{default:()=>P,fileUploadStatus:()=>x});var r=o(85798),n=o(67666),a=o(12439),i=o(78880),s=o(91034),l=o(93913),d=o(32046),c=o(32472),u=o(82002),m=o(49140),p=o(81734),w=o(67112);const h="FileBrowser";var f;!function(e){e.copy="filebrowser:copy",e.copyDownloadLink="filebrowser:copy-download-link",e.createLauncher="filebrowser:create-main-launcher",e.cut="filebrowser:cut",e.del="filebrowser:delete",e.download="filebrowser:download",e.duplicate="filebrowser:duplicate",e.hideBrowser="filebrowser:hide-main",e.goToPath="filebrowser:go-to-path",e.goUp="filebrowser:go-up",e.openPath="filebrowser:open-path",e.openUrl="filebrowser:open-url",e.open="filebrowser:open",e.openBrowserTab="filebrowser:open-browser-tab",e.paste="filebrowser:paste",e.createNewDirectory="filebrowser:create-new-directory",e.createNewFile="filebrowser:create-new-file",e.createNewMarkdownFile="filebrowser:create-new-markdown-file",e.refresh="filebrowser:refresh",e.rename="filebrowser:rename",e.copyShareableLink="filebrowser:share-main",e.copyPath="filebrowser:copy-path",e.showBrowser="filebrowser:activate",e.shutdown="filebrowser:shutdown",e.toggleBrowser="filebrowser:toggle-main",e.toggleNavigateToCurrentDirectory="filebrowser:toggle-navigate-to-current-directory",e.toggleLastModified="filebrowser:toggle-last-modified",e.search="filebrowser:search",e.toggleHiddenFiles="filebrowser:toggle-hidden-files"}(f||(f={}));const g="filebrowser",b={id:"@jupyterlab/filebrowser-extension:browser",requires:[s.IFileBrowserFactory,u.ITranslator],optional:[r.ILayoutRestorer,l.ISettingRegistry,r.ITreePathUpdater,n.ICommandPalette],provides:s.IFileBrowserCommands,autoStart:!0,activate:async(e,t,o,r,i,s,l)=>{const d=o.load("jupyterlab"),c=t.defaultBrowser;r&&r.add(c,g);const u=a.PageConfig.getOption("preferredPath");u&&await c.model.cd(u),function(e,t,o,r,i){const s=o.load("jupyterlab"),{docRegistry:l,commands:d}=e,{defaultBrowser:c,tracker:u}=t;d.addCommand(f.del,{execute:()=>{const e=u.currentWidget;if(e)return e.delete()},icon:m.closeIcon.bindprops({stylesheet:"menuItem"}),label:s.__("Delete"),mnemonic:0}),d.addCommand(f.copy,{execute:()=>{const e=u.currentWidget;if(e)return e.copy()},icon:m.copyIcon.bindprops({stylesheet:"menuItem"}),label:s.__("Copy"),mnemonic:0}),d.addCommand(f.cut,{execute:()=>{const e=u.currentWidget;if(e)return e.cut()},icon:m.cutIcon.bindprops({stylesheet:"menuItem"}),label:s.__("Cut")}),d.addCommand(f.duplicate,{execute:()=>{const e=u.currentWidget;if(e)return e.duplicate()},icon:m.copyIcon.bindprops({stylesheet:"menuItem"}),label:s.__("Duplicate")}),d.addCommand(f.goToPath,{execute:async e=>{var r;const n=e.path||"",a=!(null!==(r=null==e?void 0:e.dontShowBrowser)&&void 0!==r&&r);try{if("directory"!==(await T.navigateToPath(n,t,o)).type&&a){const e=T.getBrowserForPath(n,t);if(e){e.clearSelectedItems();const t=n.split("/"),o=t[t.length-1];o&&await e.selectItemByName(o)}}}catch(e){console.warn(`${f.goToPath} failed to go to: ${n}`,e)}if(a)return d.execute(f.showBrowser,{path:n})}}),d.addCommand(f.goUp,{label:"go up",execute:async()=>{const e=T.getBrowserForPath("",t);if(!e)return;const{model:o}=e;if(await o.restored,o.path!==o.rootPath)try{await o.cd("..")}catch(e){console.warn(`${f.goUp} failed to go to parent directory of ${o.path}`,e)}}}),d.addCommand(f.openPath,{label:e=>e.path?s.__("Open %1",e.path):s.__("Open from Path…"),caption:e=>e.path?s.__("Open %1",e.path):s.__("Open from path"),execute:async e=>{var o;let r;if(r=(null==e?void 0:e.path)?e.path:null!==(o=(await n.InputDialog.getText({label:s.__("Path"),placeholder:"/path/relative/to/jlab/root",title:s.__("Open Path"),okLabel:s.__("Open")})).value)&&void 0!==o?o:void 0,r)try{const o="/"!==r&&r.endsWith("/");o&&(r=r.slice(0,r.length-1));const n=T.getBrowserForPath(r,t),{services:a}=n.model.manager,i=await a.contents.get(r,{content:!1});if(o&&"directory"!==i.type)throw new Error(`Path ${r}/ is not a directory`);if(await d.execute(f.goToPath,{path:r,dontShowBrowser:e.dontShowBrowser}),"directory"===i.type)return;return d.execute("docmanager:open",{path:r})}catch(e){return e.response&&404===e.response.status&&(e.message=s.__("Could not find path: %1",r)),(0,n.showErrorMessage)(s.__("Cannot open"),e)}}}),i&&i.addItem({command:f.openPath,category:s.__("File Operations")}),d.addCommand(f.open,{execute:e=>{const t=e.factory||void 0,o=u.currentWidget;if(!o)return;const{contents:r}=o.model.manager.services;return Promise.all((0,p.toArray)((0,p.map)(o.selectedItems(),(e=>{if("directory"===e.type){const t=r.localPath(e.path);return o.model.cd(`/${t}`)}return d.execute("docmanager:open",{factory:t,path:e.path})}))))},icon:e=>{var t;const o=e.factory||void 0;if(o){const e=l.getFileType(o);return null===(t=null==e?void 0:e.icon)||void 0===t?void 0:t.bindprops({stylesheet:"menuItem"})}return m.folderIcon.bindprops({stylesheet:"menuItem"})},label:e=>e.label||e.factory||s.__("Open"),mnemonic:0}),d.addCommand(f.paste,{execute:()=>{const e=u.currentWidget;if(e)return e.paste()},icon:m.pasteIcon.bindprops({stylesheet:"menuItem"}),label:s.__("Paste"),mnemonic:0}),d.addCommand(f.createNewDirectory,{execute:()=>{const e=u.currentWidget;if(e)return e.createNewDirectory()},icon:m.newFolderIcon.bindprops({stylesheet:"menuItem"}),label:s.__("New Folder")}),d.addCommand(f.createNewFile,{execute:()=>{const e=u.currentWidget;if(e)return e.createNewFile({ext:"txt"})},icon:m.textEditorIcon.bindprops({stylesheet:"menuItem"}),label:s.__("New File")}),d.addCommand(f.createNewMarkdownFile,{execute:()=>{const e=u.currentWidget;if(e)return e.createNewFile({ext:"md"})},icon:m.markdownIcon.bindprops({stylesheet:"menuItem"}),label:s.__("New Markdown File")}),d.addCommand(f.refresh,{execute:e=>{const t=u.currentWidget;if(t)return t.model.refresh()},icon:m.refreshIcon.bindprops({stylesheet:"menuItem"}),caption:s.__("Refresh the file browser."),label:s.__("Refresh File List")}),d.addCommand(f.rename,{execute:e=>{const t=u.currentWidget;if(t)return t.rename()},icon:m.editIcon.bindprops({stylesheet:"menuItem"}),label:s.__("Rename"),mnemonic:0}),d.addCommand(f.copyPath,{execute:()=>{const e=u.currentWidget;if(!e)return;const t=e.selectedItems().next();t&&n.Clipboard.copyToSystem(t.path)},isVisible:()=>!!u.currentWidget&&void 0!==u.currentWidget.selectedItems().next,icon:m.fileIcon.bindprops({stylesheet:"menuItem"}),label:s.__("Copy Path")}),d.addCommand(f.shutdown,{execute:()=>{const e=u.currentWidget;if(e)return e.shutdownKernels()},icon:m.stopIcon.bindprops({stylesheet:"menuItem"}),label:s.__("Shut Down Kernel")}),d.addCommand(f.toggleBrowser,{execute:()=>c.isHidden?d.execute(f.showBrowser,void 0):d.execute(f.hideBrowser,void 0)}),d.addCommand(f.createLauncher,{label:s.__("New Launcher"),icon:e=>e.toolbar?m.addIcon:void 0,execute:e=>{if(d.hasCommand("launcher:create"))return T.createLauncher(d,c,e)}}),r&&d.addCommand(f.toggleNavigateToCurrentDirectory,{label:s.__("Show Active File in File Browser"),isToggled:()=>c.navigateToCurrentDirectory,execute:()=>{const e=!c.navigateToCurrentDirectory;return r.set("@jupyterlab/filebrowser-extension:browser","navigateToCurrentDirectory",e).catch((e=>{console.error("Failed to set navigateToCurrentDirectory setting")}))}}),d.addCommand(f.toggleLastModified,{label:s.__("Show Last Modified Column"),isToggled:()=>c.showLastModifiedColumn,execute:()=>{const e=!c.showLastModifiedColumn;if(r)return r.set("@jupyterlab/filebrowser-extension:browser","showLastModifiedColumn",e).catch((e=>{console.error("Failed to set showLastModifiedColumn setting")}))}}),d.addCommand(f.toggleHiddenFiles,{label:s.__("Show Hidden Files"),isToggled:()=>c.showHiddenFiles,isVisible:()=>"true"===a.PageConfig.getOption("allow_hidden_files"),execute:()=>{const e=!c.showHiddenFiles;if(r)return r.set("@jupyterlab/filebrowser-extension:browser","showHiddenFiles",e).catch((e=>{console.error("Failed to set showHiddenFiles setting")}))}}),d.addCommand(f.search,{label:s.__("Search on File Names"),execute:()=>alert("search")}),i&&i.addItem({command:f.toggleNavigateToCurrentDirectory,category:s.__("File Operations")})}(e,t,o,i,l);const h=()=>{const t=(0,p.find)(e.commands.keyBindings,(e=>e.command===f.toggleBrowser));if(t){const e=w.CommandRegistry.formatKeystroke(t.keys.join(" "));c.title.caption=d.__("File Browser (%1)",e)}else c.title.caption=d.__("File Browser")};h(),e.commands.keyBindingChanged.connect((()=>{h()})),Promise.all([e.restored,c.model.restored]).then((()=>{s&&c.model.pathChanged.connect(((e,t)=>{s(t.newValue)}));let e=!1,t=!0,o=!0,r=!1;i&&i.load("@jupyterlab/filebrowser-extension:browser").then((n=>{n.changed.connect((t=>{e=t.get("navigateToCurrentDirectory").composite,c.navigateToCurrentDirectory=e})),e=n.get("navigateToCurrentDirectory").composite,c.navigateToCurrentDirectory=e,n.changed.connect((e=>{t=e.get("showLastModifiedColumn").composite,c.showLastModifiedColumn=t})),t=n.get("showLastModifiedColumn").composite,c.showLastModifiedColumn=t,n.changed.connect((e=>{o=e.get("useFuzzyFilter").composite,c.useFuzzyFilter=o})),o=n.get("useFuzzyFilter").composite,c.useFuzzyFilter=o,n.changed.connect((e=>{r=e.get("showHiddenFiles").composite,c.showHiddenFiles=r})),r=n.get("showHiddenFiles").composite,c.showHiddenFiles=r}))}))}},y={id:"@jupyterlab/filebrowser-extension:factory",provides:s.IFileBrowserFactory,requires:[i.IDocumentManager,u.ITranslator],optional:[d.IStateDB,r.IRouter,r.JupyterFrontEnd.ITreeResolver],activate:async(e,t,o,r,a,i)=>{const{commands:l}=e,d=new n.WidgetTracker({namespace:g}),c=(e,n={})=>{var a;const i=new s.FilterFileBrowserModel({translator:o,auto:null===(a=n.auto)||void 0===a||a,manager:t,driveName:n.driveName||"",refreshInterval:n.refreshInterval,state:null===n.state?void 0:n.state||r||void 0}),l=n.restore,c=new s.FileBrowser({id:e,model:i,restore:l,translator:o});return d.add(c),c},u=c("filebrowser",{auto:!1,restore:!1});return T.restoreBrowser(u,l,a,i),{createFileBrowser:c,defaultBrowser:u,tracker:d}}},_={id:"@jupyterlab/filebrowser-extension:download",requires:[s.IFileBrowserFactory,u.ITranslator],autoStart:!0,activate:(e,t,o)=>{const r=o.load("jupyterlab"),{commands:a}=e,{tracker:i}=t;a.addCommand(f.download,{execute:()=>{const e=i.currentWidget;if(e)return e.download()},icon:m.downloadIcon.bindprops({stylesheet:"menuItem"}),label:r.__("Download")}),a.addCommand(f.copyDownloadLink,{execute:()=>{const e=i.currentWidget;if(e)return e.model.manager.services.contents.getDownloadUrl(e.selectedItems().next().path).then((e=>{n.Clipboard.copyToSystem(e)}))},icon:m.copyIcon.bindprops({stylesheet:"menuItem"}),label:r.__("Copy Download Link"),mnemonic:0})}},v={id:"@jupyterlab/filebrowser-extension:widget",requires:[i.IDocumentManager,s.IFileBrowserFactory,l.ISettingRegistry,n.IToolbarWidgetRegistry,u.ITranslator,r.ILabShell,s.IFileBrowserCommands],autoStart:!0,activate:(e,t,o,r,a,i,l)=>{const{commands:d}=e,{defaultBrowser:c,tracker:u}=o,p=i.load("jupyterlab");c.node.setAttribute("role","region"),c.node.setAttribute("aria-label",p.__("File Browser Section")),c.title.icon=m.folderIcon,a.registerFactory(h,"uploader",(e=>new s.Uploader({model:e.model,translator:i}))),(0,n.setToolbar)(c,(0,n.createToolbarFactory)(a,r,h,v.id,i)),l.add(c,"left",{rank:100}),d.addCommand(f.showBrowser,{execute:e=>{const t=e.path||"",r=T.getBrowserForPath(t,o);if(r)if(c!==r){const e=["left","right"];for(const t of e){const e=l.widgets(t);let o=e.next();for(;o;){if(o.contains(r))return void l.activateById(o.id);o=e.next()}}}else l.activateById(c.id)}}),d.addCommand(f.hideBrowser,{execute:()=>{const e=u.currentWidget;e&&!e.isHidden&&l.collapseLeft()}}),l.restored.then((e=>{e.fresh&&"single-document"!==l.mode&&d.execute(f.showBrowser,void 0)})),Promise.all([e.restored,c.model.restored]).then((()=>{function e(){l.isEmpty("main")&&d.hasCommand("launcher:create")&&T.createLauncher(d,c)}l.layoutModified.connect((()=>{e()})),l.currentChanged.connect((async(e,r)=>{if(c.navigateToCurrentDirectory&&r.newValue){const{newValue:e}=r,n=t.contextForWidget(e);if(n){const{path:e}=n;try{await T.navigateToPath(e,o,i)}catch(t){console.warn(`${f.goToPath} failed to open: ${e}`,t)}}}})),e()}))}},I={id:"@jupyterlab/filebrowser-extension:share-file",requires:[s.IFileBrowserFactory,u.ITranslator],autoStart:!0,activate:(e,t,o)=>{const r=o.load("jupyterlab"),{commands:i}=e,{tracker:s}=t;i.addCommand(f.copyShareableLink,{execute:()=>{const e=s.currentWidget,t=null==e?void 0:e.selectedItems().next();t&&n.Clipboard.copyToSystem(a.PageConfig.getUrl({workspace:a.PageConfig.defaultWorkspace,treePath:t.path,toShare:!0}))},isVisible:()=>!!s.currentWidget&&1===(0,p.toArray)(s.currentWidget.selectedItems()).length,icon:m.linkIcon.bindprops({stylesheet:"menuItem"}),label:r.__("Copy Shareable Link")})}},C={id:"@jupyterlab/filebrowser-extension:open-with",requires:[s.IFileBrowserFactory],autoStart:!0,activate:(e,t)=>{const{docRegistry:o}=e,{tracker:r}=t;let n=[];e.contextMenu.opened.connect((function(e){var t,a;const i=null!==(a=null===(t=e.menu.items.find((e=>{var t;return"submenu"===e.type&&"jp-contextmenu-open-with"===(null===(t=e.submenu)||void 0===t?void 0:t.id)})))||void 0===t?void 0:t.submenu)&&void 0!==a?a:null;if(!i)return;n.forEach((e=>e.dispose())),n.length=0,i.clearItems();const s=r.currentWidget?T.OpenWith.intersection((0,p.map)(r.currentWidget.selectedItems(),(e=>T.OpenWith.getFactories(o,e)))):new Set;n=[...s].map((e=>i.addItem({args:{factory:e},command:f.open})))}))}},F={id:"@jupyterlab/filebrowser-extension:open-browser-tab",requires:[s.IFileBrowserFactory,u.ITranslator],autoStart:!0,activate:(e,t,o)=>{const{commands:r}=e,n=o.load("jupyterlab"),{tracker:i}=t;r.addCommand(f.openBrowserTab,{execute:e=>{const t=i.currentWidget;if(!t)return;const o=e.mode;return Promise.all((0,p.toArray)((0,p.map)(t.selectedItems(),(e=>{if("single-document"!==o)return r.execute("docmanager:open-browser-tab",{path:e.path});{const t=a.PageConfig.getUrl({mode:"single-document",treePath:e.path}),o=window.open();if(!o)throw new Error("Failed to open new browser tab.");o.opener=null,o.location.href=t}}))))},icon:m.addIcon.bindprops({stylesheet:"menuItem"}),label:e=>"single-document"===e.mode?n.__("Open in Simple Mode"):n.__("Open in New Browser Tab"),mnemonic:0})}},x={id:"@jupyterlab/filebrowser-extension:file-upload-status",autoStart:!0,requires:[s.IFileBrowserFactory,u.ITranslator],optional:[c.IStatusBar],activate:(e,t,o,r)=>{if(!r)return;const n=new s.FileUploadStatus({tracker:t.tracker,translator:o});r.registerStatusItem("@jupyterlab/filebrowser-extension:file-upload-status",{item:n,align:"middle",isActive:()=>!!n.model&&n.model.items.length>0,activeStateChanged:n.model.stateChanged})}},B={id:"@jupyterlab/filebrowser-extension:open-url",autoStart:!0,requires:[s.IFileBrowserFactory,u.ITranslator],optional:[n.ICommandPalette],activate:(e,t,o,r)=>{const{commands:i}=e,s=o.load("jupyterlab"),{defaultBrowser:l}=t,d=f.openUrl;i.addCommand(d,{label:e=>e.url?s.__("Open %1",e.url):s.__("Open from URL…"),caption:e=>e.url?s.__("Open %1",e.url):s.__("Open from URL"),execute:async e=>{var t,o,r;let d=null!==(t=null==e?void 0:e.url)&&void 0!==t?t:"";if(d||(d=null!==(o=(await n.InputDialog.getText({label:s.__("URL"),placeholder:"https://example.com/path/to/file",title:s.__("Open URL"),okLabel:s.__("Open")})).value)&&void 0!==o?o:void 0),!d)return;let c,u="";try{const e=await fetch(d);c=await e.blob(),u=null!==(r=e.headers.get("Content-Type"))&&void 0!==r?r:""}catch(e){return e.response&&200!==e.response.status&&(e.message=s.__("Could not open URL: %1",d)),(0,n.showErrorMessage)(s.__("Cannot fetch"),e)}try{const e=a.PathExt.basename(d),t=new File([c],e,{type:u}),o=await l.model.upload(t);return i.execute("docmanager:open",{path:o.path})}catch(e){return(0,n.showErrorMessage)(s._p("showErrorMessage","Upload Error"),e)}}}),r&&r.addItem({command:d,category:s.__("File Operations")})}};var T;!function(e){e.createLauncher=function(e,t,o){const{model:r}=t;return e.execute("launcher:create",Object.assign({cwd:r.path},o)).then((e=>(r.pathChanged.connect((()=>{e.content&&(e.content.cwd=r.path)}),e),e)))},e.getBrowserForPath=function(e,t){const{defaultBrowser:o,tracker:r}=t,n=o.model.manager.services.contents.driveName(e);if(n){return r.find((e=>e.model.driveName===n))||void console.warn(`${f.goToPath} failed to find filebrowser for path: ${e}`)}return o},e.navigateToPath=async function(t,o,r){const n=r.load("jupyterlab"),i=e.getBrowserForPath(t,o);if(!i)throw new Error(n.__("No browser for path"));const{services:s}=i.model.manager,l=s.contents.localPath(t);await s.ready;const d=await s.contents.get(t,{content:!1}),{model:c}=i;return await c.restored,"directory"===d.type?await c.cd(`/${l}`):await c.cd(`/${a.PathExt.dirname(l)}`),d},e.restoreBrowser=async function(e,t,o,r){const n="jp-mod-restoring";if(e.addClass(n),!o)return await e.model.restore(e.id),await e.model.refresh(),void e.removeClass(n);const a=async()=>{o.routed.disconnect(a);const i=await(null==r?void 0:r.paths);(null==i?void 0:i.file)||(null==i?void 0:i.browser)?(await e.model.restore(e.id,!1),i.file&&await t.execute(f.openPath,{path:i.file,dontShowBrowser:!0}),i.browser&&await t.execute(f.openPath,{path:i.browser,dontShowBrowser:!0})):(await e.model.restore(e.id),await e.model.refresh()),e.removeClass(n)};o.routed.connect(a)}}(T||(T={}));const P=[y,b,I,x,_,v,C,F,B];!function(e){let t;!function(e){e.getFactories=function(e,t){var o;const r=e.preferredWidgetFactories(t.path).map((e=>e.name)),n=null===(o=e.getWidgetFactory("notebook"))||void 0===o?void 0:o.name;return n&&"notebook"===t.type&&-1===r.indexOf(n)&&r.unshift(n),r},e.intersection=function(e){const t=e.next();if(!t)return new Set;const o=new Set(t);return(0,p.reduce)(e,((e,t)=>new Set(t.filter((t=>e.has(t))))),o)}}(t=e.OpenWith||(e.OpenWith={}))}(T||(T={}))}}]);
//# sourceMappingURL=893.fd1c857.js.map