/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "reactPlayerYouTube";
exports.ids = ["reactPlayerYouTube"];
exports.modules = {

/***/ "(ssr)/./node_modules/react-player/lib/players/YouTube.js":
/*!**********************************************************!*\
  !*** ./node_modules/react-player/lib/players/YouTube.js ***!
  \**********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var __create = Object.create;\nvar __defProp = Object.defineProperty;\nvar __getOwnPropDesc = Object.getOwnPropertyDescriptor;\nvar __getOwnPropNames = Object.getOwnPropertyNames;\nvar __getProtoOf = Object.getPrototypeOf;\nvar __hasOwnProp = Object.prototype.hasOwnProperty;\nvar __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;\nvar __export = (target, all) => {\n  for (var name in all)\n    __defProp(target, name, { get: all[name], enumerable: true });\n};\nvar __copyProps = (to, from, except, desc) => {\n  if (from && typeof from === \"object\" || typeof from === \"function\") {\n    for (let key of __getOwnPropNames(from))\n      if (!__hasOwnProp.call(to, key) && key !== except)\n        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });\n  }\n  return to;\n};\nvar __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(\n  // If the importer is in node compatibility mode or this is not an ESM\n  // file that has been converted to a CommonJS file using a Babel-\n  // compatible transform (i.e. \"__esModule\" has not been set), then set\n  // \"default\" to the CommonJS \"module.exports\" for node compatibility.\n  isNodeMode || !mod || !mod.__esModule ? __defProp(target, \"default\", { value: mod, enumerable: true }) : target,\n  mod\n));\nvar __toCommonJS = (mod) => __copyProps(__defProp({}, \"__esModule\", { value: true }), mod);\nvar __publicField = (obj, key, value) => {\n  __defNormalProp(obj, typeof key !== \"symbol\" ? key + \"\" : key, value);\n  return value;\n};\nvar YouTube_exports = {};\n__export(YouTube_exports, {\n  default: () => YouTube\n});\nmodule.exports = __toCommonJS(YouTube_exports);\nvar import_react = __toESM(__webpack_require__(/*! react */ \"react?9fde\"));\nvar import_utils = __webpack_require__(/*! ../utils */ \"(ssr)/./node_modules/react-player/lib/utils.js\");\nvar import_patterns = __webpack_require__(/*! ../patterns */ \"(ssr)/./node_modules/react-player/lib/patterns.js\");\nconst SDK_URL = \"https://www.youtube.com/iframe_api\";\nconst SDK_GLOBAL = \"YT\";\nconst SDK_GLOBAL_READY = \"onYouTubeIframeAPIReady\";\nconst MATCH_PLAYLIST = /[?&](?:list|channel)=([a-zA-Z0-9_-]+)/;\nconst MATCH_USER_UPLOADS = /user\\/([a-zA-Z0-9_-]+)\\/?/;\nconst MATCH_NOCOOKIE = /youtube-nocookie\\.com/;\nconst NOCOOKIE_HOST = \"https://www.youtube-nocookie.com\";\nclass YouTube extends import_react.Component {\n  constructor() {\n    super(...arguments);\n    __publicField(this, \"callPlayer\", import_utils.callPlayer);\n    __publicField(this, \"parsePlaylist\", (url) => {\n      if (url instanceof Array) {\n        return {\n          listType: \"playlist\",\n          playlist: url.map(this.getID).join(\",\")\n        };\n      }\n      if (MATCH_PLAYLIST.test(url)) {\n        const [, playlistId] = url.match(MATCH_PLAYLIST);\n        return {\n          listType: \"playlist\",\n          list: playlistId.replace(/^UC/, \"UU\")\n        };\n      }\n      if (MATCH_USER_UPLOADS.test(url)) {\n        const [, username] = url.match(MATCH_USER_UPLOADS);\n        return {\n          listType: \"user_uploads\",\n          list: username\n        };\n      }\n      return {};\n    });\n    __publicField(this, \"onStateChange\", (event) => {\n      const { data } = event;\n      const { onPlay, onPause, onBuffer, onBufferEnd, onEnded, onReady, loop, config: { playerVars, onUnstarted } } = this.props;\n      const { UNSTARTED, PLAYING, PAUSED, BUFFERING, ENDED, CUED } = window[SDK_GLOBAL].PlayerState;\n      if (data === UNSTARTED)\n        onUnstarted();\n      if (data === PLAYING) {\n        onPlay();\n        onBufferEnd();\n      }\n      if (data === PAUSED)\n        onPause();\n      if (data === BUFFERING)\n        onBuffer();\n      if (data === ENDED) {\n        const isPlaylist = !!this.callPlayer(\"getPlaylist\");\n        if (loop && !isPlaylist) {\n          if (playerVars.start) {\n            this.seekTo(playerVars.start);\n          } else {\n            this.play();\n          }\n        }\n        onEnded();\n      }\n      if (data === CUED)\n        onReady();\n    });\n    __publicField(this, \"mute\", () => {\n      this.callPlayer(\"mute\");\n    });\n    __publicField(this, \"unmute\", () => {\n      this.callPlayer(\"unMute\");\n    });\n    __publicField(this, \"ref\", (container) => {\n      this.container = container;\n    });\n  }\n  componentDidMount() {\n    this.props.onMount && this.props.onMount(this);\n  }\n  getID(url) {\n    if (!url || url instanceof Array || MATCH_PLAYLIST.test(url)) {\n      return null;\n    }\n    return url.match(import_patterns.MATCH_URL_YOUTUBE)[1];\n  }\n  load(url, isReady) {\n    const { playing, muted, playsinline, controls, loop, config, onError } = this.props;\n    const { playerVars, embedOptions } = config;\n    const id = this.getID(url);\n    if (isReady) {\n      if (MATCH_PLAYLIST.test(url) || MATCH_USER_UPLOADS.test(url) || url instanceof Array) {\n        this.player.loadPlaylist(this.parsePlaylist(url));\n        return;\n      }\n      this.player.cueVideoById({\n        videoId: id,\n        startSeconds: (0, import_utils.parseStartTime)(url) || playerVars.start,\n        endSeconds: (0, import_utils.parseEndTime)(url) || playerVars.end\n      });\n      return;\n    }\n    (0, import_utils.getSDK)(SDK_URL, SDK_GLOBAL, SDK_GLOBAL_READY, (YT) => YT.loaded).then((YT) => {\n      if (!this.container)\n        return;\n      this.player = new YT.Player(this.container, {\n        width: \"100%\",\n        height: \"100%\",\n        videoId: id,\n        playerVars: {\n          autoplay: playing ? 1 : 0,\n          mute: muted ? 1 : 0,\n          controls: controls ? 1 : 0,\n          start: (0, import_utils.parseStartTime)(url),\n          end: (0, import_utils.parseEndTime)(url),\n          origin: window.location.origin,\n          playsinline: playsinline ? 1 : 0,\n          ...this.parsePlaylist(url),\n          ...playerVars\n        },\n        events: {\n          onReady: () => {\n            if (loop) {\n              this.player.setLoop(true);\n            }\n            this.props.onReady();\n          },\n          onPlaybackRateChange: (event) => this.props.onPlaybackRateChange(event.data),\n          onPlaybackQualityChange: (event) => this.props.onPlaybackQualityChange(event),\n          onStateChange: this.onStateChange,\n          onError: (event) => onError(event.data)\n        },\n        host: MATCH_NOCOOKIE.test(url) ? NOCOOKIE_HOST : void 0,\n        ...embedOptions\n      });\n    }, onError);\n    if (embedOptions.events) {\n      console.warn(\"Using `embedOptions.events` will likely break things. Use ReactPlayer\\u2019s callback props instead, eg onReady, onPlay, onPause\");\n    }\n  }\n  play() {\n    this.callPlayer(\"playVideo\");\n  }\n  pause() {\n    this.callPlayer(\"pauseVideo\");\n  }\n  stop() {\n    if (!document.body.contains(this.callPlayer(\"getIframe\")))\n      return;\n    this.callPlayer(\"stopVideo\");\n  }\n  seekTo(amount, keepPlaying = false) {\n    this.callPlayer(\"seekTo\", amount);\n    if (!keepPlaying && !this.props.playing) {\n      this.pause();\n    }\n  }\n  setVolume(fraction) {\n    this.callPlayer(\"setVolume\", fraction * 100);\n  }\n  setPlaybackRate(rate) {\n    this.callPlayer(\"setPlaybackRate\", rate);\n  }\n  setLoop(loop) {\n    this.callPlayer(\"setLoop\", loop);\n  }\n  getDuration() {\n    return this.callPlayer(\"getDuration\");\n  }\n  getCurrentTime() {\n    return this.callPlayer(\"getCurrentTime\");\n  }\n  getSecondsLoaded() {\n    return this.callPlayer(\"getVideoLoadedFraction\") * this.getDuration();\n  }\n  render() {\n    const { display } = this.props;\n    const style = {\n      width: \"100%\",\n      height: \"100%\",\n      display\n    };\n    return /* @__PURE__ */ import_react.default.createElement(\"div\", { style }, /* @__PURE__ */ import_react.default.createElement(\"div\", { ref: this.ref }));\n  }\n}\n__publicField(YouTube, \"displayName\", \"YouTube\");\n__publicField(YouTube, \"canPlay\", import_patterns.canPlay.youtube);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvcmVhY3QtcGxheWVyL2xpYi9wbGF5ZXJzL1lvdVR1YmUuanMiLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOEVBQThFLDZEQUE2RDtBQUMzSTtBQUNBO0FBQ0EsOEJBQThCLGtDQUFrQztBQUNoRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkJBQTZCLDRGQUE0RjtBQUN6SDtBQUNBO0FBQ0E7QUFDQSxtR0FBbUc7QUFDbkc7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5RUFBeUUsOEJBQThCO0FBQ3ZHO0FBQ0E7QUFDQSxvREFBb0Qsa0JBQWtCLGFBQWE7QUFDbkY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQSwyQkFBMkIsbUJBQU8sQ0FBQyx5QkFBTztBQUMxQyxtQkFBbUIsbUJBQU8sQ0FBQyxnRUFBVTtBQUNyQyxzQkFBc0IsbUJBQU8sQ0FBQyxzRUFBYTtBQUMzQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxjQUFjLE9BQU87QUFDckIsY0FBYywwRUFBMEUsNEJBQTRCO0FBQ3BILGNBQWMscURBQXFEO0FBQ25FO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVk7QUFDWjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWSwrREFBK0Q7QUFDM0UsWUFBWSwyQkFBMkI7QUFDdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxPQUFPO0FBQ1AsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWSxVQUFVO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1RUFBdUUsT0FBTyw4REFBOEQsZUFBZTtBQUMzSjtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL2lrbm93LXJlYWN0Ly4vbm9kZV9tb2R1bGVzL3JlYWN0LXBsYXllci9saWIvcGxheWVycy9Zb3VUdWJlLmpzP2Q3NmYiXSwic291cmNlc0NvbnRlbnQiOlsidmFyIF9fY3JlYXRlID0gT2JqZWN0LmNyZWF0ZTtcbnZhciBfX2RlZlByb3AgPSBPYmplY3QuZGVmaW5lUHJvcGVydHk7XG52YXIgX19nZXRPd25Qcm9wRGVzYyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3I7XG52YXIgX19nZXRPd25Qcm9wTmFtZXMgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcztcbnZhciBfX2dldFByb3RvT2YgPSBPYmplY3QuZ2V0UHJvdG90eXBlT2Y7XG52YXIgX19oYXNPd25Qcm9wID0gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eTtcbnZhciBfX2RlZk5vcm1hbFByb3AgPSAob2JqLCBrZXksIHZhbHVlKSA9PiBrZXkgaW4gb2JqID8gX19kZWZQcm9wKG9iaiwga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSwgd3JpdGFibGU6IHRydWUsIHZhbHVlIH0pIDogb2JqW2tleV0gPSB2YWx1ZTtcbnZhciBfX2V4cG9ydCA9ICh0YXJnZXQsIGFsbCkgPT4ge1xuICBmb3IgKHZhciBuYW1lIGluIGFsbClcbiAgICBfX2RlZlByb3AodGFyZ2V0LCBuYW1lLCB7IGdldDogYWxsW25hbWVdLCBlbnVtZXJhYmxlOiB0cnVlIH0pO1xufTtcbnZhciBfX2NvcHlQcm9wcyA9ICh0bywgZnJvbSwgZXhjZXB0LCBkZXNjKSA9PiB7XG4gIGlmIChmcm9tICYmIHR5cGVvZiBmcm9tID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBmcm9tID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICBmb3IgKGxldCBrZXkgb2YgX19nZXRPd25Qcm9wTmFtZXMoZnJvbSkpXG4gICAgICBpZiAoIV9faGFzT3duUHJvcC5jYWxsKHRvLCBrZXkpICYmIGtleSAhPT0gZXhjZXB0KVxuICAgICAgICBfX2RlZlByb3AodG8sIGtleSwgeyBnZXQ6ICgpID0+IGZyb21ba2V5XSwgZW51bWVyYWJsZTogIShkZXNjID0gX19nZXRPd25Qcm9wRGVzYyhmcm9tLCBrZXkpKSB8fCBkZXNjLmVudW1lcmFibGUgfSk7XG4gIH1cbiAgcmV0dXJuIHRvO1xufTtcbnZhciBfX3RvRVNNID0gKG1vZCwgaXNOb2RlTW9kZSwgdGFyZ2V0KSA9PiAodGFyZ2V0ID0gbW9kICE9IG51bGwgPyBfX2NyZWF0ZShfX2dldFByb3RvT2YobW9kKSkgOiB7fSwgX19jb3B5UHJvcHMoXG4gIC8vIElmIHRoZSBpbXBvcnRlciBpcyBpbiBub2RlIGNvbXBhdGliaWxpdHkgbW9kZSBvciB0aGlzIGlzIG5vdCBhbiBFU01cbiAgLy8gZmlsZSB0aGF0IGhhcyBiZWVuIGNvbnZlcnRlZCB0byBhIENvbW1vbkpTIGZpbGUgdXNpbmcgYSBCYWJlbC1cbiAgLy8gY29tcGF0aWJsZSB0cmFuc2Zvcm0gKGkuZS4gXCJfX2VzTW9kdWxlXCIgaGFzIG5vdCBiZWVuIHNldCksIHRoZW4gc2V0XG4gIC8vIFwiZGVmYXVsdFwiIHRvIHRoZSBDb21tb25KUyBcIm1vZHVsZS5leHBvcnRzXCIgZm9yIG5vZGUgY29tcGF0aWJpbGl0eS5cbiAgaXNOb2RlTW9kZSB8fCAhbW9kIHx8ICFtb2QuX19lc01vZHVsZSA/IF9fZGVmUHJvcCh0YXJnZXQsIFwiZGVmYXVsdFwiLCB7IHZhbHVlOiBtb2QsIGVudW1lcmFibGU6IHRydWUgfSkgOiB0YXJnZXQsXG4gIG1vZFxuKSk7XG52YXIgX190b0NvbW1vbkpTID0gKG1vZCkgPT4gX19jb3B5UHJvcHMoX19kZWZQcm9wKHt9LCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KSwgbW9kKTtcbnZhciBfX3B1YmxpY0ZpZWxkID0gKG9iaiwga2V5LCB2YWx1ZSkgPT4ge1xuICBfX2RlZk5vcm1hbFByb3Aob2JqLCB0eXBlb2Yga2V5ICE9PSBcInN5bWJvbFwiID8ga2V5ICsgXCJcIiA6IGtleSwgdmFsdWUpO1xuICByZXR1cm4gdmFsdWU7XG59O1xudmFyIFlvdVR1YmVfZXhwb3J0cyA9IHt9O1xuX19leHBvcnQoWW91VHViZV9leHBvcnRzLCB7XG4gIGRlZmF1bHQ6ICgpID0+IFlvdVR1YmVcbn0pO1xubW9kdWxlLmV4cG9ydHMgPSBfX3RvQ29tbW9uSlMoWW91VHViZV9leHBvcnRzKTtcbnZhciBpbXBvcnRfcmVhY3QgPSBfX3RvRVNNKHJlcXVpcmUoXCJyZWFjdFwiKSk7XG52YXIgaW1wb3J0X3V0aWxzID0gcmVxdWlyZShcIi4uL3V0aWxzXCIpO1xudmFyIGltcG9ydF9wYXR0ZXJucyA9IHJlcXVpcmUoXCIuLi9wYXR0ZXJuc1wiKTtcbmNvbnN0IFNES19VUkwgPSBcImh0dHBzOi8vd3d3LnlvdXR1YmUuY29tL2lmcmFtZV9hcGlcIjtcbmNvbnN0IFNES19HTE9CQUwgPSBcIllUXCI7XG5jb25zdCBTREtfR0xPQkFMX1JFQURZID0gXCJvbllvdVR1YmVJZnJhbWVBUElSZWFkeVwiO1xuY29uc3QgTUFUQ0hfUExBWUxJU1QgPSAvWz8mXSg/Omxpc3R8Y2hhbm5lbCk9KFthLXpBLVowLTlfLV0rKS87XG5jb25zdCBNQVRDSF9VU0VSX1VQTE9BRFMgPSAvdXNlclxcLyhbYS16QS1aMC05Xy1dKylcXC8/LztcbmNvbnN0IE1BVENIX05PQ09PS0lFID0gL3lvdXR1YmUtbm9jb29raWVcXC5jb20vO1xuY29uc3QgTk9DT09LSUVfSE9TVCA9IFwiaHR0cHM6Ly93d3cueW91dHViZS1ub2Nvb2tpZS5jb21cIjtcbmNsYXNzIFlvdVR1YmUgZXh0ZW5kcyBpbXBvcnRfcmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoLi4uYXJndW1lbnRzKTtcbiAgICBfX3B1YmxpY0ZpZWxkKHRoaXMsIFwiY2FsbFBsYXllclwiLCBpbXBvcnRfdXRpbHMuY2FsbFBsYXllcik7XG4gICAgX19wdWJsaWNGaWVsZCh0aGlzLCBcInBhcnNlUGxheWxpc3RcIiwgKHVybCkgPT4ge1xuICAgICAgaWYgKHVybCBpbnN0YW5jZW9mIEFycmF5KSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgbGlzdFR5cGU6IFwicGxheWxpc3RcIixcbiAgICAgICAgICBwbGF5bGlzdDogdXJsLm1hcCh0aGlzLmdldElEKS5qb2luKFwiLFwiKVxuICAgICAgICB9O1xuICAgICAgfVxuICAgICAgaWYgKE1BVENIX1BMQVlMSVNULnRlc3QodXJsKSkge1xuICAgICAgICBjb25zdCBbLCBwbGF5bGlzdElkXSA9IHVybC5tYXRjaChNQVRDSF9QTEFZTElTVCk7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgbGlzdFR5cGU6IFwicGxheWxpc3RcIixcbiAgICAgICAgICBsaXN0OiBwbGF5bGlzdElkLnJlcGxhY2UoL15VQy8sIFwiVVVcIilcbiAgICAgICAgfTtcbiAgICAgIH1cbiAgICAgIGlmIChNQVRDSF9VU0VSX1VQTE9BRFMudGVzdCh1cmwpKSB7XG4gICAgICAgIGNvbnN0IFssIHVzZXJuYW1lXSA9IHVybC5tYXRjaChNQVRDSF9VU0VSX1VQTE9BRFMpO1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIGxpc3RUeXBlOiBcInVzZXJfdXBsb2Fkc1wiLFxuICAgICAgICAgIGxpc3Q6IHVzZXJuYW1lXG4gICAgICAgIH07XG4gICAgICB9XG4gICAgICByZXR1cm4ge307XG4gICAgfSk7XG4gICAgX19wdWJsaWNGaWVsZCh0aGlzLCBcIm9uU3RhdGVDaGFuZ2VcIiwgKGV2ZW50KSA9PiB7XG4gICAgICBjb25zdCB7IGRhdGEgfSA9IGV2ZW50O1xuICAgICAgY29uc3QgeyBvblBsYXksIG9uUGF1c2UsIG9uQnVmZmVyLCBvbkJ1ZmZlckVuZCwgb25FbmRlZCwgb25SZWFkeSwgbG9vcCwgY29uZmlnOiB7IHBsYXllclZhcnMsIG9uVW5zdGFydGVkIH0gfSA9IHRoaXMucHJvcHM7XG4gICAgICBjb25zdCB7IFVOU1RBUlRFRCwgUExBWUlORywgUEFVU0VELCBCVUZGRVJJTkcsIEVOREVELCBDVUVEIH0gPSB3aW5kb3dbU0RLX0dMT0JBTF0uUGxheWVyU3RhdGU7XG4gICAgICBpZiAoZGF0YSA9PT0gVU5TVEFSVEVEKVxuICAgICAgICBvblVuc3RhcnRlZCgpO1xuICAgICAgaWYgKGRhdGEgPT09IFBMQVlJTkcpIHtcbiAgICAgICAgb25QbGF5KCk7XG4gICAgICAgIG9uQnVmZmVyRW5kKCk7XG4gICAgICB9XG4gICAgICBpZiAoZGF0YSA9PT0gUEFVU0VEKVxuICAgICAgICBvblBhdXNlKCk7XG4gICAgICBpZiAoZGF0YSA9PT0gQlVGRkVSSU5HKVxuICAgICAgICBvbkJ1ZmZlcigpO1xuICAgICAgaWYgKGRhdGEgPT09IEVOREVEKSB7XG4gICAgICAgIGNvbnN0IGlzUGxheWxpc3QgPSAhIXRoaXMuY2FsbFBsYXllcihcImdldFBsYXlsaXN0XCIpO1xuICAgICAgICBpZiAobG9vcCAmJiAhaXNQbGF5bGlzdCkge1xuICAgICAgICAgIGlmIChwbGF5ZXJWYXJzLnN0YXJ0KSB7XG4gICAgICAgICAgICB0aGlzLnNlZWtUbyhwbGF5ZXJWYXJzLnN0YXJ0KTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5wbGF5KCk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIG9uRW5kZWQoKTtcbiAgICAgIH1cbiAgICAgIGlmIChkYXRhID09PSBDVUVEKVxuICAgICAgICBvblJlYWR5KCk7XG4gICAgfSk7XG4gICAgX19wdWJsaWNGaWVsZCh0aGlzLCBcIm11dGVcIiwgKCkgPT4ge1xuICAgICAgdGhpcy5jYWxsUGxheWVyKFwibXV0ZVwiKTtcbiAgICB9KTtcbiAgICBfX3B1YmxpY0ZpZWxkKHRoaXMsIFwidW5tdXRlXCIsICgpID0+IHtcbiAgICAgIHRoaXMuY2FsbFBsYXllcihcInVuTXV0ZVwiKTtcbiAgICB9KTtcbiAgICBfX3B1YmxpY0ZpZWxkKHRoaXMsIFwicmVmXCIsIChjb250YWluZXIpID0+IHtcbiAgICAgIHRoaXMuY29udGFpbmVyID0gY29udGFpbmVyO1xuICAgIH0pO1xuICB9XG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIHRoaXMucHJvcHMub25Nb3VudCAmJiB0aGlzLnByb3BzLm9uTW91bnQodGhpcyk7XG4gIH1cbiAgZ2V0SUQodXJsKSB7XG4gICAgaWYgKCF1cmwgfHwgdXJsIGluc3RhbmNlb2YgQXJyYXkgfHwgTUFUQ0hfUExBWUxJU1QudGVzdCh1cmwpKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgcmV0dXJuIHVybC5tYXRjaChpbXBvcnRfcGF0dGVybnMuTUFUQ0hfVVJMX1lPVVRVQkUpWzFdO1xuICB9XG4gIGxvYWQodXJsLCBpc1JlYWR5KSB7XG4gICAgY29uc3QgeyBwbGF5aW5nLCBtdXRlZCwgcGxheXNpbmxpbmUsIGNvbnRyb2xzLCBsb29wLCBjb25maWcsIG9uRXJyb3IgfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3QgeyBwbGF5ZXJWYXJzLCBlbWJlZE9wdGlvbnMgfSA9IGNvbmZpZztcbiAgICBjb25zdCBpZCA9IHRoaXMuZ2V0SUQodXJsKTtcbiAgICBpZiAoaXNSZWFkeSkge1xuICAgICAgaWYgKE1BVENIX1BMQVlMSVNULnRlc3QodXJsKSB8fCBNQVRDSF9VU0VSX1VQTE9BRFMudGVzdCh1cmwpIHx8IHVybCBpbnN0YW5jZW9mIEFycmF5KSB7XG4gICAgICAgIHRoaXMucGxheWVyLmxvYWRQbGF5bGlzdCh0aGlzLnBhcnNlUGxheWxpc3QodXJsKSk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIHRoaXMucGxheWVyLmN1ZVZpZGVvQnlJZCh7XG4gICAgICAgIHZpZGVvSWQ6IGlkLFxuICAgICAgICBzdGFydFNlY29uZHM6ICgwLCBpbXBvcnRfdXRpbHMucGFyc2VTdGFydFRpbWUpKHVybCkgfHwgcGxheWVyVmFycy5zdGFydCxcbiAgICAgICAgZW5kU2Vjb25kczogKDAsIGltcG9ydF91dGlscy5wYXJzZUVuZFRpbWUpKHVybCkgfHwgcGxheWVyVmFycy5lbmRcbiAgICAgIH0pO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICAoMCwgaW1wb3J0X3V0aWxzLmdldFNESykoU0RLX1VSTCwgU0RLX0dMT0JBTCwgU0RLX0dMT0JBTF9SRUFEWSwgKFlUKSA9PiBZVC5sb2FkZWQpLnRoZW4oKFlUKSA9PiB7XG4gICAgICBpZiAoIXRoaXMuY29udGFpbmVyKVxuICAgICAgICByZXR1cm47XG4gICAgICB0aGlzLnBsYXllciA9IG5ldyBZVC5QbGF5ZXIodGhpcy5jb250YWluZXIsIHtcbiAgICAgICAgd2lkdGg6IFwiMTAwJVwiLFxuICAgICAgICBoZWlnaHQ6IFwiMTAwJVwiLFxuICAgICAgICB2aWRlb0lkOiBpZCxcbiAgICAgICAgcGxheWVyVmFyczoge1xuICAgICAgICAgIGF1dG9wbGF5OiBwbGF5aW5nID8gMSA6IDAsXG4gICAgICAgICAgbXV0ZTogbXV0ZWQgPyAxIDogMCxcbiAgICAgICAgICBjb250cm9sczogY29udHJvbHMgPyAxIDogMCxcbiAgICAgICAgICBzdGFydDogKDAsIGltcG9ydF91dGlscy5wYXJzZVN0YXJ0VGltZSkodXJsKSxcbiAgICAgICAgICBlbmQ6ICgwLCBpbXBvcnRfdXRpbHMucGFyc2VFbmRUaW1lKSh1cmwpLFxuICAgICAgICAgIG9yaWdpbjogd2luZG93LmxvY2F0aW9uLm9yaWdpbixcbiAgICAgICAgICBwbGF5c2lubGluZTogcGxheXNpbmxpbmUgPyAxIDogMCxcbiAgICAgICAgICAuLi50aGlzLnBhcnNlUGxheWxpc3QodXJsKSxcbiAgICAgICAgICAuLi5wbGF5ZXJWYXJzXG4gICAgICAgIH0sXG4gICAgICAgIGV2ZW50czoge1xuICAgICAgICAgIG9uUmVhZHk6ICgpID0+IHtcbiAgICAgICAgICAgIGlmIChsb29wKSB7XG4gICAgICAgICAgICAgIHRoaXMucGxheWVyLnNldExvb3AodHJ1ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLnByb3BzLm9uUmVhZHkoKTtcbiAgICAgICAgICB9LFxuICAgICAgICAgIG9uUGxheWJhY2tSYXRlQ2hhbmdlOiAoZXZlbnQpID0+IHRoaXMucHJvcHMub25QbGF5YmFja1JhdGVDaGFuZ2UoZXZlbnQuZGF0YSksXG4gICAgICAgICAgb25QbGF5YmFja1F1YWxpdHlDaGFuZ2U6IChldmVudCkgPT4gdGhpcy5wcm9wcy5vblBsYXliYWNrUXVhbGl0eUNoYW5nZShldmVudCksXG4gICAgICAgICAgb25TdGF0ZUNoYW5nZTogdGhpcy5vblN0YXRlQ2hhbmdlLFxuICAgICAgICAgIG9uRXJyb3I6IChldmVudCkgPT4gb25FcnJvcihldmVudC5kYXRhKVxuICAgICAgICB9LFxuICAgICAgICBob3N0OiBNQVRDSF9OT0NPT0tJRS50ZXN0KHVybCkgPyBOT0NPT0tJRV9IT1NUIDogdm9pZCAwLFxuICAgICAgICAuLi5lbWJlZE9wdGlvbnNcbiAgICAgIH0pO1xuICAgIH0sIG9uRXJyb3IpO1xuICAgIGlmIChlbWJlZE9wdGlvbnMuZXZlbnRzKSB7XG4gICAgICBjb25zb2xlLndhcm4oXCJVc2luZyBgZW1iZWRPcHRpb25zLmV2ZW50c2Agd2lsbCBsaWtlbHkgYnJlYWsgdGhpbmdzLiBVc2UgUmVhY3RQbGF5ZXJcXHUyMDE5cyBjYWxsYmFjayBwcm9wcyBpbnN0ZWFkLCBlZyBvblJlYWR5LCBvblBsYXksIG9uUGF1c2VcIik7XG4gICAgfVxuICB9XG4gIHBsYXkoKSB7XG4gICAgdGhpcy5jYWxsUGxheWVyKFwicGxheVZpZGVvXCIpO1xuICB9XG4gIHBhdXNlKCkge1xuICAgIHRoaXMuY2FsbFBsYXllcihcInBhdXNlVmlkZW9cIik7XG4gIH1cbiAgc3RvcCgpIHtcbiAgICBpZiAoIWRvY3VtZW50LmJvZHkuY29udGFpbnModGhpcy5jYWxsUGxheWVyKFwiZ2V0SWZyYW1lXCIpKSlcbiAgICAgIHJldHVybjtcbiAgICB0aGlzLmNhbGxQbGF5ZXIoXCJzdG9wVmlkZW9cIik7XG4gIH1cbiAgc2Vla1RvKGFtb3VudCwga2VlcFBsYXlpbmcgPSBmYWxzZSkge1xuICAgIHRoaXMuY2FsbFBsYXllcihcInNlZWtUb1wiLCBhbW91bnQpO1xuICAgIGlmICgha2VlcFBsYXlpbmcgJiYgIXRoaXMucHJvcHMucGxheWluZykge1xuICAgICAgdGhpcy5wYXVzZSgpO1xuICAgIH1cbiAgfVxuICBzZXRWb2x1bWUoZnJhY3Rpb24pIHtcbiAgICB0aGlzLmNhbGxQbGF5ZXIoXCJzZXRWb2x1bWVcIiwgZnJhY3Rpb24gKiAxMDApO1xuICB9XG4gIHNldFBsYXliYWNrUmF0ZShyYXRlKSB7XG4gICAgdGhpcy5jYWxsUGxheWVyKFwic2V0UGxheWJhY2tSYXRlXCIsIHJhdGUpO1xuICB9XG4gIHNldExvb3AobG9vcCkge1xuICAgIHRoaXMuY2FsbFBsYXllcihcInNldExvb3BcIiwgbG9vcCk7XG4gIH1cbiAgZ2V0RHVyYXRpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuY2FsbFBsYXllcihcImdldER1cmF0aW9uXCIpO1xuICB9XG4gIGdldEN1cnJlbnRUaW1lKCkge1xuICAgIHJldHVybiB0aGlzLmNhbGxQbGF5ZXIoXCJnZXRDdXJyZW50VGltZVwiKTtcbiAgfVxuICBnZXRTZWNvbmRzTG9hZGVkKCkge1xuICAgIHJldHVybiB0aGlzLmNhbGxQbGF5ZXIoXCJnZXRWaWRlb0xvYWRlZEZyYWN0aW9uXCIpICogdGhpcy5nZXREdXJhdGlvbigpO1xuICB9XG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IGRpc3BsYXkgfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3Qgc3R5bGUgPSB7XG4gICAgICB3aWR0aDogXCIxMDAlXCIsXG4gICAgICBoZWlnaHQ6IFwiMTAwJVwiLFxuICAgICAgZGlzcGxheVxuICAgIH07XG4gICAgcmV0dXJuIC8qIEBfX1BVUkVfXyAqLyBpbXBvcnRfcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHsgc3R5bGUgfSwgLyogQF9fUFVSRV9fICovIGltcG9ydF9yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyByZWY6IHRoaXMucmVmIH0pKTtcbiAgfVxufVxuX19wdWJsaWNGaWVsZChZb3VUdWJlLCBcImRpc3BsYXlOYW1lXCIsIFwiWW91VHViZVwiKTtcbl9fcHVibGljRmllbGQoWW91VHViZSwgXCJjYW5QbGF5XCIsIGltcG9ydF9wYXR0ZXJucy5jYW5QbGF5LnlvdXR1YmUpO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/react-player/lib/players/YouTube.js\n");

/***/ })

};
;