/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunk_N_E"] = self["webpackChunk_N_E"] || []).push([["reactPlayerTwitch"],{

/***/ "(app-pages-browser)/./node_modules/react-player/lib/players/Twitch.js":
/*!*********************************************************!*\
  !*** ./node_modules/react-player/lib/players/Twitch.js ***!
  \*********************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval(__webpack_require__.ts("var __create = Object.create;\nvar __defProp = Object.defineProperty;\nvar __getOwnPropDesc = Object.getOwnPropertyDescriptor;\nvar __getOwnPropNames = Object.getOwnPropertyNames;\nvar __getProtoOf = Object.getPrototypeOf;\nvar __hasOwnProp = Object.prototype.hasOwnProperty;\nvar __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;\nvar __export = (target, all) => {\n  for (var name in all)\n    __defProp(target, name, { get: all[name], enumerable: true });\n};\nvar __copyProps = (to, from, except, desc) => {\n  if (from && typeof from === \"object\" || typeof from === \"function\") {\n    for (let key of __getOwnPropNames(from))\n      if (!__hasOwnProp.call(to, key) && key !== except)\n        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });\n  }\n  return to;\n};\nvar __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(\n  // If the importer is in node compatibility mode or this is not an ESM\n  // file that has been converted to a CommonJS file using a Babel-\n  // compatible transform (i.e. \"__esModule\" has not been set), then set\n  // \"default\" to the CommonJS \"module.exports\" for node compatibility.\n  isNodeMode || !mod || !mod.__esModule ? __defProp(target, \"default\", { value: mod, enumerable: true }) : target,\n  mod\n));\nvar __toCommonJS = (mod) => __copyProps(__defProp({}, \"__esModule\", { value: true }), mod);\nvar __publicField = (obj, key, value) => {\n  __defNormalProp(obj, typeof key !== \"symbol\" ? key + \"\" : key, value);\n  return value;\n};\nvar Twitch_exports = {};\n__export(Twitch_exports, {\n  default: () => Twitch\n});\nmodule.exports = __toCommonJS(Twitch_exports);\nvar import_react = __toESM(__webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\"));\nvar import_utils = __webpack_require__(/*! ../utils */ \"(app-pages-browser)/./node_modules/react-player/lib/utils.js\");\nvar import_patterns = __webpack_require__(/*! ../patterns */ \"(app-pages-browser)/./node_modules/react-player/lib/patterns.js\");\nconst SDK_URL = \"https://player.twitch.tv/js/embed/v1.js\";\nconst SDK_GLOBAL = \"Twitch\";\nconst PLAYER_ID_PREFIX = \"twitch-player-\";\nclass Twitch extends import_react.Component {\n  constructor() {\n    super(...arguments);\n    __publicField(this, \"callPlayer\", import_utils.callPlayer);\n    __publicField(this, \"playerID\", this.props.config.playerId || `${PLAYER_ID_PREFIX}${(0, import_utils.randomString)()}`);\n    __publicField(this, \"mute\", () => {\n      this.callPlayer(\"setMuted\", true);\n    });\n    __publicField(this, \"unmute\", () => {\n      this.callPlayer(\"setMuted\", false);\n    });\n  }\n  componentDidMount() {\n    this.props.onMount && this.props.onMount(this);\n  }\n  load(url, isReady) {\n    const { playsinline, onError, config, controls } = this.props;\n    const isChannel = import_patterns.MATCH_URL_TWITCH_CHANNEL.test(url);\n    const id = isChannel ? url.match(import_patterns.MATCH_URL_TWITCH_CHANNEL)[1] : url.match(import_patterns.MATCH_URL_TWITCH_VIDEO)[1];\n    if (isReady) {\n      if (isChannel) {\n        this.player.setChannel(id);\n      } else {\n        this.player.setVideo(\"v\" + id);\n      }\n      return;\n    }\n    (0, import_utils.getSDK)(SDK_URL, SDK_GLOBAL).then((Twitch2) => {\n      this.player = new Twitch2.Player(this.playerID, {\n        video: isChannel ? \"\" : id,\n        channel: isChannel ? id : \"\",\n        height: \"100%\",\n        width: \"100%\",\n        playsinline,\n        autoplay: this.props.playing,\n        muted: this.props.muted,\n        // https://github.com/CookPete/react-player/issues/733#issuecomment-549085859\n        controls: isChannel ? true : controls,\n        time: (0, import_utils.parseStartTime)(url),\n        ...config.options\n      });\n      const { READY, PLAYING, PAUSE, ENDED, ONLINE, OFFLINE, SEEK } = Twitch2.Player;\n      this.player.addEventListener(READY, this.props.onReady);\n      this.player.addEventListener(PLAYING, this.props.onPlay);\n      this.player.addEventListener(PAUSE, this.props.onPause);\n      this.player.addEventListener(ENDED, this.props.onEnded);\n      this.player.addEventListener(SEEK, this.props.onSeek);\n      this.player.addEventListener(ONLINE, this.props.onLoaded);\n      this.player.addEventListener(OFFLINE, this.props.onLoaded);\n    }, onError);\n  }\n  play() {\n    this.callPlayer(\"play\");\n  }\n  pause() {\n    this.callPlayer(\"pause\");\n  }\n  stop() {\n    this.callPlayer(\"pause\");\n  }\n  seekTo(seconds, keepPlaying = true) {\n    this.callPlayer(\"seek\", seconds);\n    if (!keepPlaying) {\n      this.pause();\n    }\n  }\n  setVolume(fraction) {\n    this.callPlayer(\"setVolume\", fraction);\n  }\n  getDuration() {\n    return this.callPlayer(\"getDuration\");\n  }\n  getCurrentTime() {\n    return this.callPlayer(\"getCurrentTime\");\n  }\n  getSecondsLoaded() {\n    return null;\n  }\n  render() {\n    const style = {\n      width: \"100%\",\n      height: \"100%\"\n    };\n    return /* @__PURE__ */ import_react.default.createElement(\"div\", { style, id: this.playerID });\n  }\n}\n__publicField(Twitch, \"displayName\", \"Twitch\");\n__publicField(Twitch, \"canPlay\", import_patterns.canPlay.twitch);\n__publicField(Twitch, \"loopOnEnded\", true);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL25vZGVfbW9kdWxlcy9yZWFjdC1wbGF5ZXIvbGliL3BsYXllcnMvVHdpdGNoLmpzIiwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhFQUE4RSw2REFBNkQ7QUFDM0k7QUFDQTtBQUNBLDhCQUE4QixrQ0FBa0M7QUFDaEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZCQUE2Qiw0RkFBNEY7QUFDekg7QUFDQTtBQUNBO0FBQ0EsbUdBQW1HO0FBQ25HO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUVBQXlFLDhCQUE4QjtBQUN2RztBQUNBO0FBQ0Esb0RBQW9ELGtCQUFrQixhQUFhO0FBQ25GO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0EsMkJBQTJCLG1CQUFPLENBQUMsbUZBQU87QUFDMUMsbUJBQW1CLG1CQUFPLENBQUMsOEVBQVU7QUFDckMsc0JBQXNCLG1CQUFPLENBQUMsb0ZBQWE7QUFDM0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxRUFBcUUsaUJBQWlCLEVBQUUsaUNBQWlDO0FBQ3pIO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWSx5Q0FBeUM7QUFDckQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQLGNBQWMsc0RBQXNEO0FBQ3BFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVFQUF1RSwwQkFBMEI7QUFDakc7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvcmVhY3QtcGxheWVyL2xpYi9wbGF5ZXJzL1R3aXRjaC5qcz83MDI1Il0sInNvdXJjZXNDb250ZW50IjpbInZhciBfX2NyZWF0ZSA9IE9iamVjdC5jcmVhdGU7XG52YXIgX19kZWZQcm9wID0gT2JqZWN0LmRlZmluZVByb3BlcnR5O1xudmFyIF9fZ2V0T3duUHJvcERlc2MgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yO1xudmFyIF9fZ2V0T3duUHJvcE5hbWVzID0gT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXM7XG52YXIgX19nZXRQcm90b09mID0gT2JqZWN0LmdldFByb3RvdHlwZU9mO1xudmFyIF9faGFzT3duUHJvcCA9IE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHk7XG52YXIgX19kZWZOb3JtYWxQcm9wID0gKG9iaiwga2V5LCB2YWx1ZSkgPT4ga2V5IGluIG9iaiA/IF9fZGVmUHJvcChvYmosIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUsIHdyaXRhYmxlOiB0cnVlLCB2YWx1ZSB9KSA6IG9ialtrZXldID0gdmFsdWU7XG52YXIgX19leHBvcnQgPSAodGFyZ2V0LCBhbGwpID0+IHtcbiAgZm9yICh2YXIgbmFtZSBpbiBhbGwpXG4gICAgX19kZWZQcm9wKHRhcmdldCwgbmFtZSwgeyBnZXQ6IGFsbFtuYW1lXSwgZW51bWVyYWJsZTogdHJ1ZSB9KTtcbn07XG52YXIgX19jb3B5UHJvcHMgPSAodG8sIGZyb20sIGV4Y2VwdCwgZGVzYykgPT4ge1xuICBpZiAoZnJvbSAmJiB0eXBlb2YgZnJvbSA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgZnJvbSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgZm9yIChsZXQga2V5IG9mIF9fZ2V0T3duUHJvcE5hbWVzKGZyb20pKVxuICAgICAgaWYgKCFfX2hhc093blByb3AuY2FsbCh0bywga2V5KSAmJiBrZXkgIT09IGV4Y2VwdClcbiAgICAgICAgX19kZWZQcm9wKHRvLCBrZXksIHsgZ2V0OiAoKSA9PiBmcm9tW2tleV0sIGVudW1lcmFibGU6ICEoZGVzYyA9IF9fZ2V0T3duUHJvcERlc2MoZnJvbSwga2V5KSkgfHwgZGVzYy5lbnVtZXJhYmxlIH0pO1xuICB9XG4gIHJldHVybiB0bztcbn07XG52YXIgX190b0VTTSA9IChtb2QsIGlzTm9kZU1vZGUsIHRhcmdldCkgPT4gKHRhcmdldCA9IG1vZCAhPSBudWxsID8gX19jcmVhdGUoX19nZXRQcm90b09mKG1vZCkpIDoge30sIF9fY29weVByb3BzKFxuICAvLyBJZiB0aGUgaW1wb3J0ZXIgaXMgaW4gbm9kZSBjb21wYXRpYmlsaXR5IG1vZGUgb3IgdGhpcyBpcyBub3QgYW4gRVNNXG4gIC8vIGZpbGUgdGhhdCBoYXMgYmVlbiBjb252ZXJ0ZWQgdG8gYSBDb21tb25KUyBmaWxlIHVzaW5nIGEgQmFiZWwtXG4gIC8vIGNvbXBhdGlibGUgdHJhbnNmb3JtIChpLmUuIFwiX19lc01vZHVsZVwiIGhhcyBub3QgYmVlbiBzZXQpLCB0aGVuIHNldFxuICAvLyBcImRlZmF1bHRcIiB0byB0aGUgQ29tbW9uSlMgXCJtb2R1bGUuZXhwb3J0c1wiIGZvciBub2RlIGNvbXBhdGliaWxpdHkuXG4gIGlzTm9kZU1vZGUgfHwgIW1vZCB8fCAhbW9kLl9fZXNNb2R1bGUgPyBfX2RlZlByb3AodGFyZ2V0LCBcImRlZmF1bHRcIiwgeyB2YWx1ZTogbW9kLCBlbnVtZXJhYmxlOiB0cnVlIH0pIDogdGFyZ2V0LFxuICBtb2RcbikpO1xudmFyIF9fdG9Db21tb25KUyA9IChtb2QpID0+IF9fY29weVByb3BzKF9fZGVmUHJvcCh7fSwgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSksIG1vZCk7XG52YXIgX19wdWJsaWNGaWVsZCA9IChvYmosIGtleSwgdmFsdWUpID0+IHtcbiAgX19kZWZOb3JtYWxQcm9wKG9iaiwgdHlwZW9mIGtleSAhPT0gXCJzeW1ib2xcIiA/IGtleSArIFwiXCIgOiBrZXksIHZhbHVlKTtcbiAgcmV0dXJuIHZhbHVlO1xufTtcbnZhciBUd2l0Y2hfZXhwb3J0cyA9IHt9O1xuX19leHBvcnQoVHdpdGNoX2V4cG9ydHMsIHtcbiAgZGVmYXVsdDogKCkgPT4gVHdpdGNoXG59KTtcbm1vZHVsZS5leHBvcnRzID0gX190b0NvbW1vbkpTKFR3aXRjaF9leHBvcnRzKTtcbnZhciBpbXBvcnRfcmVhY3QgPSBfX3RvRVNNKHJlcXVpcmUoXCJyZWFjdFwiKSk7XG52YXIgaW1wb3J0X3V0aWxzID0gcmVxdWlyZShcIi4uL3V0aWxzXCIpO1xudmFyIGltcG9ydF9wYXR0ZXJucyA9IHJlcXVpcmUoXCIuLi9wYXR0ZXJuc1wiKTtcbmNvbnN0IFNES19VUkwgPSBcImh0dHBzOi8vcGxheWVyLnR3aXRjaC50di9qcy9lbWJlZC92MS5qc1wiO1xuY29uc3QgU0RLX0dMT0JBTCA9IFwiVHdpdGNoXCI7XG5jb25zdCBQTEFZRVJfSURfUFJFRklYID0gXCJ0d2l0Y2gtcGxheWVyLVwiO1xuY2xhc3MgVHdpdGNoIGV4dGVuZHMgaW1wb3J0X3JlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKC4uLmFyZ3VtZW50cyk7XG4gICAgX19wdWJsaWNGaWVsZCh0aGlzLCBcImNhbGxQbGF5ZXJcIiwgaW1wb3J0X3V0aWxzLmNhbGxQbGF5ZXIpO1xuICAgIF9fcHVibGljRmllbGQodGhpcywgXCJwbGF5ZXJJRFwiLCB0aGlzLnByb3BzLmNvbmZpZy5wbGF5ZXJJZCB8fCBgJHtQTEFZRVJfSURfUFJFRklYfSR7KDAsIGltcG9ydF91dGlscy5yYW5kb21TdHJpbmcpKCl9YCk7XG4gICAgX19wdWJsaWNGaWVsZCh0aGlzLCBcIm11dGVcIiwgKCkgPT4ge1xuICAgICAgdGhpcy5jYWxsUGxheWVyKFwic2V0TXV0ZWRcIiwgdHJ1ZSk7XG4gICAgfSk7XG4gICAgX19wdWJsaWNGaWVsZCh0aGlzLCBcInVubXV0ZVwiLCAoKSA9PiB7XG4gICAgICB0aGlzLmNhbGxQbGF5ZXIoXCJzZXRNdXRlZFwiLCBmYWxzZSk7XG4gICAgfSk7XG4gIH1cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgdGhpcy5wcm9wcy5vbk1vdW50ICYmIHRoaXMucHJvcHMub25Nb3VudCh0aGlzKTtcbiAgfVxuICBsb2FkKHVybCwgaXNSZWFkeSkge1xuICAgIGNvbnN0IHsgcGxheXNpbmxpbmUsIG9uRXJyb3IsIGNvbmZpZywgY29udHJvbHMgfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3QgaXNDaGFubmVsID0gaW1wb3J0X3BhdHRlcm5zLk1BVENIX1VSTF9UV0lUQ0hfQ0hBTk5FTC50ZXN0KHVybCk7XG4gICAgY29uc3QgaWQgPSBpc0NoYW5uZWwgPyB1cmwubWF0Y2goaW1wb3J0X3BhdHRlcm5zLk1BVENIX1VSTF9UV0lUQ0hfQ0hBTk5FTClbMV0gOiB1cmwubWF0Y2goaW1wb3J0X3BhdHRlcm5zLk1BVENIX1VSTF9UV0lUQ0hfVklERU8pWzFdO1xuICAgIGlmIChpc1JlYWR5KSB7XG4gICAgICBpZiAoaXNDaGFubmVsKSB7XG4gICAgICAgIHRoaXMucGxheWVyLnNldENoYW5uZWwoaWQpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5wbGF5ZXIuc2V0VmlkZW8oXCJ2XCIgKyBpZCk7XG4gICAgICB9XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgICgwLCBpbXBvcnRfdXRpbHMuZ2V0U0RLKShTREtfVVJMLCBTREtfR0xPQkFMKS50aGVuKChUd2l0Y2gyKSA9PiB7XG4gICAgICB0aGlzLnBsYXllciA9IG5ldyBUd2l0Y2gyLlBsYXllcih0aGlzLnBsYXllcklELCB7XG4gICAgICAgIHZpZGVvOiBpc0NoYW5uZWwgPyBcIlwiIDogaWQsXG4gICAgICAgIGNoYW5uZWw6IGlzQ2hhbm5lbCA/IGlkIDogXCJcIixcbiAgICAgICAgaGVpZ2h0OiBcIjEwMCVcIixcbiAgICAgICAgd2lkdGg6IFwiMTAwJVwiLFxuICAgICAgICBwbGF5c2lubGluZSxcbiAgICAgICAgYXV0b3BsYXk6IHRoaXMucHJvcHMucGxheWluZyxcbiAgICAgICAgbXV0ZWQ6IHRoaXMucHJvcHMubXV0ZWQsXG4gICAgICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9Db29rUGV0ZS9yZWFjdC1wbGF5ZXIvaXNzdWVzLzczMyNpc3N1ZWNvbW1lbnQtNTQ5MDg1ODU5XG4gICAgICAgIGNvbnRyb2xzOiBpc0NoYW5uZWwgPyB0cnVlIDogY29udHJvbHMsXG4gICAgICAgIHRpbWU6ICgwLCBpbXBvcnRfdXRpbHMucGFyc2VTdGFydFRpbWUpKHVybCksXG4gICAgICAgIC4uLmNvbmZpZy5vcHRpb25zXG4gICAgICB9KTtcbiAgICAgIGNvbnN0IHsgUkVBRFksIFBMQVlJTkcsIFBBVVNFLCBFTkRFRCwgT05MSU5FLCBPRkZMSU5FLCBTRUVLIH0gPSBUd2l0Y2gyLlBsYXllcjtcbiAgICAgIHRoaXMucGxheWVyLmFkZEV2ZW50TGlzdGVuZXIoUkVBRFksIHRoaXMucHJvcHMub25SZWFkeSk7XG4gICAgICB0aGlzLnBsYXllci5hZGRFdmVudExpc3RlbmVyKFBMQVlJTkcsIHRoaXMucHJvcHMub25QbGF5KTtcbiAgICAgIHRoaXMucGxheWVyLmFkZEV2ZW50TGlzdGVuZXIoUEFVU0UsIHRoaXMucHJvcHMub25QYXVzZSk7XG4gICAgICB0aGlzLnBsYXllci5hZGRFdmVudExpc3RlbmVyKEVOREVELCB0aGlzLnByb3BzLm9uRW5kZWQpO1xuICAgICAgdGhpcy5wbGF5ZXIuYWRkRXZlbnRMaXN0ZW5lcihTRUVLLCB0aGlzLnByb3BzLm9uU2Vlayk7XG4gICAgICB0aGlzLnBsYXllci5hZGRFdmVudExpc3RlbmVyKE9OTElORSwgdGhpcy5wcm9wcy5vbkxvYWRlZCk7XG4gICAgICB0aGlzLnBsYXllci5hZGRFdmVudExpc3RlbmVyKE9GRkxJTkUsIHRoaXMucHJvcHMub25Mb2FkZWQpO1xuICAgIH0sIG9uRXJyb3IpO1xuICB9XG4gIHBsYXkoKSB7XG4gICAgdGhpcy5jYWxsUGxheWVyKFwicGxheVwiKTtcbiAgfVxuICBwYXVzZSgpIHtcbiAgICB0aGlzLmNhbGxQbGF5ZXIoXCJwYXVzZVwiKTtcbiAgfVxuICBzdG9wKCkge1xuICAgIHRoaXMuY2FsbFBsYXllcihcInBhdXNlXCIpO1xuICB9XG4gIHNlZWtUbyhzZWNvbmRzLCBrZWVwUGxheWluZyA9IHRydWUpIHtcbiAgICB0aGlzLmNhbGxQbGF5ZXIoXCJzZWVrXCIsIHNlY29uZHMpO1xuICAgIGlmICgha2VlcFBsYXlpbmcpIHtcbiAgICAgIHRoaXMucGF1c2UoKTtcbiAgICB9XG4gIH1cbiAgc2V0Vm9sdW1lKGZyYWN0aW9uKSB7XG4gICAgdGhpcy5jYWxsUGxheWVyKFwic2V0Vm9sdW1lXCIsIGZyYWN0aW9uKTtcbiAgfVxuICBnZXREdXJhdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5jYWxsUGxheWVyKFwiZ2V0RHVyYXRpb25cIik7XG4gIH1cbiAgZ2V0Q3VycmVudFRpbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMuY2FsbFBsYXllcihcImdldEN1cnJlbnRUaW1lXCIpO1xuICB9XG4gIGdldFNlY29uZHNMb2FkZWQoKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHN0eWxlID0ge1xuICAgICAgd2lkdGg6IFwiMTAwJVwiLFxuICAgICAgaGVpZ2h0OiBcIjEwMCVcIlxuICAgIH07XG4gICAgcmV0dXJuIC8qIEBfX1BVUkVfXyAqLyBpbXBvcnRfcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHsgc3R5bGUsIGlkOiB0aGlzLnBsYXllcklEIH0pO1xuICB9XG59XG5fX3B1YmxpY0ZpZWxkKFR3aXRjaCwgXCJkaXNwbGF5TmFtZVwiLCBcIlR3aXRjaFwiKTtcbl9fcHVibGljRmllbGQoVHdpdGNoLCBcImNhblBsYXlcIiwgaW1wb3J0X3BhdHRlcm5zLmNhblBsYXkudHdpdGNoKTtcbl9fcHVibGljRmllbGQoVHdpdGNoLCBcImxvb3BPbkVuZGVkXCIsIHRydWUpO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./node_modules/react-player/lib/players/Twitch.js\n"));

/***/ })

}]);