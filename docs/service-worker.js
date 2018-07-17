/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.4.1/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "config.js",
    "revision": "f4d7eb63a35c8314a4fdb7c5dda92788"
  },
  {
    "url": "index.css",
    "revision": "2a913cb693852af36550ab2db61f1e42"
  },
  {
    "url": "index.html",
    "revision": "7faad1bae2e18e58b347277c3546b646"
  },
  {
    "url": "index.js",
    "revision": "204b863f25b49d7b6c477a7f2c9cabeb"
  },
  {
    "url": "js/zuix-bundler.js",
    "revision": "d41d8cd98f00b204e9800998ecf8427e"
  },
  {
    "url": "js/zuix-bundler.min.js",
    "revision": "d41d8cd98f00b204e9800998ecf8427e"
  },
  {
    "url": "js/zuix.js",
    "revision": "d41d8cd98f00b204e9800998ecf8427e"
  },
  {
    "url": "js/zuix.min.js",
    "revision": "d41d8cd98f00b204e9800998ecf8427e"
  },
  {
    "url": "js/zuix/zuix-bundler.js",
    "revision": "eb33b5ce9366a7b0db361f512c5a6b91"
  },
  {
    "url": "js/zuix/zuix-bundler.min.js",
    "revision": "85a2d07a1b5b855ae9f3cf1665184010"
  },
  {
    "url": "js/zuix/zuix.js",
    "revision": "f238c9386986706905eaa43f658036d9"
  },
  {
    "url": "js/zuix/zuix.min.js",
    "revision": "da949dbe266840cbf2802590d087fe2c"
  },
  {
    "url": "manifest.json",
    "revision": "de42a7a42360c76b22c151ae584228de"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
