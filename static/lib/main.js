'use strict';

define('forum/composer/tampa-bay-composer', function () {
    const TampaBayComposer = {};

    TampaBayComposer.init = function () {
        require(['composer'], function (composer) {
            composer.on('composer:ready', function () {
                console.log('Tampa Bay Composer plugin is active!');

                const composerEl = document.querySelector('.composer-container');
                if (composerEl) {
                    const customButton = document.createElement('button');
                    customButton.className = 'btn btn-primary';
                    customButton.textContent = 'Add Coastal Plan Info';
                    customButton.onclick = function () {
                        alert('This button works! We can use this to add content to the composer.');
                    };
                    composerEl.appendChild(customButton);
                }
            });
        });
    };

    return TampaBayComposer;
});

require(['composer'], function (composer) {
    composer.on('action:composer.editor.init', function (data) {
        require(['forum/composer/tampa-bay-composer'], function (TampaBayComposer) {
            TampaBayComposer.init();
        });
    });
});