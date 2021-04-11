const pup = require("puppeteer");
let id = "9896691432";
let pass = "9991763213";
let browserPromise = pup.launch({
    headless: false,
    defaultViewport: false,
    args: ['--start-fullscreen']
});
let bio="There is no shortcut to success.";
let tab;
let brow;
browserPromise.then(function(browser){
    brow = browser;
    let pagesPromise = browser.pages();
    return pagesPromise;
}).then(function(pages){
    tab = pages[0];
    let pageOpenPromise = tab.goto("https://www.facebook.com/");
    return pageOpenPromise;
}).then(function(){
    let idPromise = tab.type("#email",id);
    return idPromise;
}).then(function(){
    let passPromise = tab.type("#pass",pass);
    return passPromise;
}).then(function(){
    let loginPromise = tab.click("._42ft._4jy0._6lth._4jy6._4jy1.selected._51sy");
    return loginPromise;
}).then(function(){
      let wait=tab.waitForSelector(".fop5sh7t.fv0vnmcu.j83agx80",{visible:true});
    return wait;
}).then(function(){
    let wpClickPromise = tab.click(".fop5sh7t.fv0vnmcu.j83agx80");
    return wpClickPromise;
}).then(function(){
    let wait=tab.waitForSelector(".d2edcug0.hpfvmrgz.qv66sw1b.c1et5uql.lr9zc1uh.jq4qci2q.a3bd9o3v.lrazzd5p.q66pz984",{visible:true});
  return wait;
}).then(function(){
  let wpClickPromise = tab.click(".d2edcug0.hpfvmrgz.qv66sw1b.c1et5uql.lr9zc1uh.jq4qci2q.a3bd9o3v.lrazzd5p.q66pz984");
  return wpClickPromise;
}).then(function(){
    let button=tab.click(".oajrlxb2.g5ia77u1.qu0x051f.esr5mh6w.e9989ue4.r7d6kgcz.rq0escxv.nhd2j8a9.nc684nl6.p7hjln8o.kvgmc6g5.cxmmr5t8.oygrvhab.hcukyx3x.jb3vyjys.rz4wbd8a.qt6c0cv9.a8nywdso.i1ao9s8h.esuyzwwr.f1sip0of.lzcic4wl.q66pz984.gpro0wi8.lrazzd5p")
    return button;
}).then(function(){
    let wait=tab.waitForSelector("textarea[placeholder='Describe who you are']",{visible:true});
  return wait;
}).then(function(){
    let wpClickPromise = tab.type("textarea[placeholder='Describe who you are']",bio);
    return wpClickPromise;
}).then(function(){
    let save=tab.click(".d2edcug0.hpfvmrgz.qv66sw1b.c1et5uql.lr9zc1uh.jq4qci2q.a3bd9o3v.lrazzd5p.bwm1u5wc");
    return save;
}).then(function(){
    let skipwait=tab.waitForSelector(".d2edcug0.hpfvmrgz.qv66sw1b.c1et5uql.lr9zc1uh.jq4qci2q.a3bd9o3v.lrazzd5p.a57itxjd");
    return skipwait;
}).then(function(){
    let skip=tab.click(".d2edcug0.hpfvmrgz.qv66sw1b.c1et5uql.lr9zc1uh.jq4qci2q.a3bd9o3v.lrazzd5p.a57itxjd");
    return skip;
}).catch(function(err) {
    console.log(err);
})
