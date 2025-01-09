import {
    p as e,
    b as t
} from "./p-43f79dfb.js";
export {
    s as setNonce
}
from "./p-43f79dfb.js";
import {
    g as a
} from "./p-e1255160.js";
const r = () => {
    const t =
        import.meta.url,
        a = {};
    return "" !== t && (a.resourcesUrl = new URL(".", t).href), e(a)
};
r().then((async e => (await a(), t([
    ["p-4d245ebe", [
        [1, "presto-playlist", {
                items: [16],
                heading: [1],
                listTextSingular: [1, "list-text-singular"],
                listTextPlural: [1, "list-text-plural"],
                transitionDuration: [2, "transition-duration"],
                currentPlaylistItem: [32],
                currentPlyr: [32],
                playing: [32]
            },
            [
                [0, "rewatch", "rewatch"],
                [0, "next", "next"]
            ], {
                currentPlyr: ["handleCurrentPlay"]
            }
        ]
    ]],
    ["p-ffab5a11", [
        [1, "presto-player-skeleton", {
            effect: [1]
        }]
    ]],
    ["p-accbf9cd", [
        [4, "presto-timestamp", {
            time: [1]
        }]
    ]],
    ["p-ba1dc20e", [
        [1, "presto-video-curtain-ui", {
            actionUrl: [1, "action-url"]
        }]
    ]],
    ["p-b3731d50", [
        [1, "presto-search-bar-ui", {
            value: [1025],
            placeholder: [1],
            hasNavigation: [4, "has-navigation"],
            focused: [32],
            placeholderWidth: [32]
        }, null, {
            placeholder: ["handlePlaceholderSize"],
            value: ["handleValueChange"],
            focused: ["watchPropHandler"]
        }]
    ]],
    ["p-5dfd1438", [
        [1, "presto-player-button", {
            type: [513],
            size: [513],
            full: [516],
            disabled: [516],
            submit: [516],
            name: [1],
            value: [1],
            href: [1],
            target: [513],
            download: [1],
            hasFocus: [32],
            hasLabel: [32],
            hasPrefix: [32],
            hasSuffix: [32]
        }]
    ]],
    ["p-892f7c14", [
        [1, "presto-cta-overlay-ui", {
            headline: [1],
            defaultHeadline: [1, "default-headline"],
            bottomText: [1, "bottom-text"],
            showButton: [4, "show-button"],
            buttonText: [1, "button-text"],
            buttonType: [1, "button-type"],
            buttonLink: [16],
            allowRewatch: [4, "allow-rewatch"],
            allowSkip: [4, "allow-skip"],
            direction: [1],
            i18n: [16],
            provider: [1],
            type: [1],
            isAudioProvider: [32]
        }]
    ]],
    ["p-8fb42c61", [
        [0, "presto-video", {
            getRef: [1040],
            autoplay: [4],
            src: [1],
            preload: [1],
            poster: [1],
            player: [8],
            tracks: [16],
            playsinline: [4],
            provider: [1],
            videoAttributes: [16]
        }]
    ]],
    ["p-9dc09eba", [
        [1, "presto-action-bar-ui", {
            open: [4]
        }],
        [0, "presto-youtube-subscribe-button", {
            channel: [1],
            layout: [1],
            showCount: [4, "show-count"]
        }]
    ]],
    ["p-0665e072", [
        [1, "presto-email-overlay-ui", {
            headline: [1],
            bottomText: [1, "bottom-text"],
            buttonText: [1, "button-text"],
            allowSkip: [4, "allow-skip"],
            borderRadius: [2, "border-radius"],
            isLoading: [4, "is-loading"],
            errorMessage: [1, "error-message"],
            direction: [1],
            i18n: [16],
            provider: [1],
            type: [1],
            email: [32],
            isAudioProvider: [32]
        }],
        [1, "presto-player-spinner"]
    ]],
    ["p-100fe3ec", [
        [1, "presto-action-bar", {
            player: [8],
            config: [16],
            direction: [1],
            youtube: [16],
            currentTime: [32],
            duration: [32],
            ended: [32]
        }],
        [0, "presto-cta-overlay", {
            player: [8],
            direction: [1],
            preset: [16],
            i18n: [16],
            provider: [1],
            currentTime: [32],
            duration: [32],
            ended: [32]
        }],
        [0, "presto-email-overlay", {
            player: [8],
            direction: [1],
            preset: [16],
            videoId: [2, "video-id"],
            i18n: [16],
            provider: [1],
            currentTime: [32],
            duration: [32],
            ended: [32]
        }],
        [0, "presto-bunny", {
            getRef: [1040],
            autoplay: [4],
            src: [1],
            preload: [1],
            poster: [1025],
            player: [8],
            tracks: [16],
            playsinline: [4],
            provider: [1],
            thumbnail: [1],
            previewUrl: [1, "preview-url"],
            videoAttributes: [16]
        }],
        [1, "presto-dynamic-overlays", {
            overlays: [16],
            player: [8],
            preset: [16],
            enabled: [4],
            currentTime: [32],
            destroy: [32]
        }],
        [0, "presto-search-bar", {
            value: [1],
            player: [8],
            markers: [32],
            currentMarkerLocation: [32]
        }],
        [0, "presto-youtube", {
            src: [1],
            poster: [1025],
            lazyLoad: [1028, "lazy-load"],
            player: [8],
            getRef: [1040],
            reloadPlayer: [32],
            isWebView: [32]
        }, null, {
            player: ["handlePlayerChange"]
        }],
        [0, "presto-audio", {
            getRef: [1040],
            autoplay: [4],
            src: [1],
            preload: [1],
            poster: [1],
            player: [8],
            preset: [16],
            tracks: [16],
            provider: [1],
            mediaTitle: [1, "media-title"],
            audioAttributes: [16],
            width: [32]
        }],
        [4, "presto-business-skin"],
        [4, "presto-modern-skin"],
        [0, "presto-muted-overlay", {
            mutedPreview: [4, "muted-preview"],
            mutedOverlay: [16],
            preset: [16]
        }],
        [4, "presto-stacked-skin"],
        [0, "presto-vimeo", {
            src: [1],
            poster: [1],
            player: [8],
            getRef: [1040]
        }],
        [1, "presto-action-bar-controller", {
            ended: [4],
            config: [16],
            currentTime: [514, "current-time"],
            duration: [514],
            direction: [1],
            youtube: [16],
            show: [32],
            youtubeRenderKey: [32],
            percentagePassed: [32]
        }, null, {
            duration: ["handleDuration", "handlePercentagePassed"],
            ended: ["handleEnded"],
            currentTime: ["handlePercentagePassed", "handleTime"],
            config: ["handleButtonCountChange"],
            show: ["handleCtaStateChange"]
        }],
        [0, "presto-cta-overlay-controller", {
            ended: [4],
            currentTime: [514, "current-time"],
            duration: [514],
            direction: [1],
            cta: [16],
            i18n: [16],
            provider: [1],
            enabled: [32],
            show: [32],
            loading: [32],
            error: [32],
            skipped: [32],
            percentagePassed: [32]
        }, null, {
            ended: ["handleEnded"],
            duration: ["handleDuration", "handlePercentagePassed"],
            currentTime: ["handlePercentagePassed", "handleEnabled", "handleTime"],
            show: ["handleCtaStateChange"]
        }],
        [0, "presto-email-overlay-controller", {
            ended: [4],
            currentTime: [514, "current-time"],
            duration: [514],
            direction: [1],
            emailCollection: [16],
            i18n: [16],
            videoId: [2, "video-id"],
            presetId: [2, "preset-id"],
            provider: [1],
            enabled: [32],
            show: [32],
            loading: [32],
            error: [32],
            percentagePassed: [32]
        }, null, {
            duration: ["handleDuration"],
            currentTime: ["handleTimeCheck", "handleShowChange"],
            show: ["handleEmailStateChange"]
        }],
        [1, "presto-dynamic-overlay-ui", {
            href: [1],
            target: [1],
            position: [1]
        }]
    ]],
    ["p-20fd3adb", [
        [1, "presto-player", {
                video_id: [2],
                iconUrl: [1, "icon-url"],
                src: [1],
                bunny: [16],
                branding: [16],
                config: [16],
                preset: [16],
                chapters: [16],
                overlays: [16],
                blockAttributes: [16],
                tracks: [16],
                analytics: [4],
                automations: [4],
                provider: [513],
                provider_video_id: [1],
                actionBar: [16],
                youtube: [16],
                type: [1],
                autoplay: [1540],
                preload: [1],
                poster: [1],
                playsinline: [4],
                isAdmin: [4, "is-admin"],
                direction: [1],
                css: [1],
                currentTime: [2, "current-time"],
                mediaTitle: [1, "media-title"],
                classes: [1],
                videoAttributes: [16],
                audioAttributes: [16],
                search: [16],
                markers: [8],
                player: [32],
                playerEl: [32],
                shouldLazyLoad: [32],
                mutedPreview: [32],
                duration: [32],
                isSticky: [32],
                videoHeight: [32],
                playClass: [32],
                previouslyPlaying: [32],
                ctaActive: [32],
                emailActive: [32],
                actionBarActive: [32],
                ready: [32],
                play: [64],
                goToAndPlay: [64],
                restart: [64],
                pause: [64],
                stop: [64],
                fullscreenToggle: [64],
                on: [64],
                once: [64],
                off: [64]
            },
            [
                [8, "currentMediaPlayer", "handleScroll"],
                [0, "restartVideo", "handleRestartVideo"],
                [0, "playVideo", "handlePlayVideo"],
                [0, "pauseVideo", "handlePauseVideo"],
                [8, "visibilitychange", "playVideoOnlyInViewport"],
                [0, "ctaStateChange", "handleCtaStateChange"],
                [0, "emailStateChange", "handleEmailStateChange"],
                [0, "actionBarStateChange", "handleActionBarStateChange"]
            ], {
                currentTime: ["handleCurrentTimeChange"],
                isSticky: ["handleStickyChange"],
                playerEl: ["handlePlayerElementChange"],
                player: ["handlePlayerElementChange"],
                mutedPreview: ["handleMutedPreview"],
                shouldLazyLoad: ["handleLazyLoadChange"],
                overlays: ["renderDynamicOverlays"],
                preset: ["renderDynamicOverlays"]
            }
        ],
        [1, "presto-playlist-item", {
            active: [4],
            playing: [4]
        }],
        [1, "presto-playlist-overlay", {
            nextItemTitle: [1, "next-item-title"],
            nextItemString: [1, "next-item-string"],
            transitionDuration: [2, "transition-duration"],
            isLastItem: [4, "is-last-item"],
            show: [4],
            animating: [32]
        }, null, {
            show: ["handleShow"],
            animating: ["handleAnimatingChange"]
        }],
        [1, "presto-playlist-ui"]
    ]]
], e))));