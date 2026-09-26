export class Pane {
 constructor({container}){this.panel=LabsPanels.adapt(new SHPanel(container));this.root=this.wrap(this.panel)}
 wrap(folder){const pane=this;return {addFolder(o){return pane.wrap(folder.folder(o.title,o))},addBinding(obj,key,opts={}){let c;if(opts.options)c=folder.select(obj,key,opts);else if(typeof obj[key]==='boolean')c=folder.toggle(obj,key,opts);else if(typeof obj[key]==='number')c=folder.slider(obj,key,opts);else {const el=document.createElement('div');el.className='sh-ctrl';folder._body.append(el);c={on(){return c},setValue(v){el.textContent=(opts.label||key)+': '+v}};c.setValue(obj[key]);}return c},addButton(o){const callbacks=[];folder.button(o.title,()=>callbacks.forEach(fn=>fn()));return {on(type,fn){callbacks.push(fn);return this}}}}}
 addFolder(o){return this.root.addFolder(o)}
 refresh(){this.panel.refresh()}
}
