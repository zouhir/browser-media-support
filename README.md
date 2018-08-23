<div align="center">
  <img src="https://codecs.zouhir.codes/assets/logo.png">
  <br />
  <h5>What Media Codecs Can Your Browser Playback?</h5>
</div>

### Background

You can write a 20 page document of all media container formats web browsers can play with all codec variations but pretty challanging to find a single reference that list what combination of Web Browser [Edge, Safari, Chrome, FF] can Play on [Mac, Win10, Linux, ChromeOS, iOS, Android]. the reasons are:

0- Codecs patents and licensing is a very complicated topic.

1- Edge fully relies on codecs available in your Windows 10 OS, but does not whitelist all of them.

2- FireFox relies on *some* codecs like H.264 and AAC in your OS but have the rest bundled in its binaries see [patented media](https://support.mozilla.org/en-US/kb/html5-audio-and-video-firefox#w_patented-media_2).

3- Chromium build execludes risky patented codecs but Chrome has them, Chrome on desktop adds them, Chrome on Android remove some then om Chrome OS adds some more. [ref](https://www.chromium.org/audio-video).


### About this web app

This web app will detect what media container formats and codecs the browser your are vewing it in supports on the OS you are using.

#### HTMLMediaElement: Typical Playback in HTML video or audio element

This web app passes the mimetypes through `HTMLMediaElement.canPlayType()` [MDN](https://developer.mozilla.org/en-US/docs/Web/API/HTMLMediaElement/canPlayType) which returns:

- **probably**: The specified media type appears to be playable.
- **maybe**: Cannot tell if the media type is playable without playing it.
- **'' (empty string)**: The specified media type definitely cannot be played.

For simplicity I have replaced:

- **probably**: Yes.
- **maybe**: Maybe.
- **' ' (empty string)**: No.

#### MSE: Playback in video or audio element via Media Source Extension

MSE is an extension to HTML5's MediaElement which allows JavaScript to generate media streams that facilitates a variety of use cases like adaptive streaming and time shifting live streams.

This web app passes mimetypes through `MediaSource.isTypeSupported()` [MDN](https://developer.mozilla.org/en-US/docs/Web/API/MediaSource/isTypeSupported) which returns a boolean value.


### Listed Mime Types

I have over 90 mimetype, collected them from variety of places such as:

- Edge whitelisted codecs.

- [WebKit](https://webkit.org/getting-started/) unit tests.

- Chromium unit tests [ref1](https://cs.chromium.org/chromium/src/media/base/mime_util_unittest.cc), [ref2](https://cs.chromium.org/chromium/src/content/browser/media/media_canplaytype_browsertest.cc)

If you believe any is invalid or anything is missing, please open and issue, also, PRs are welcome.

### License

MIT - [Zouhir Chahoud](https://zouhir.codes/)

