/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

(function () {
    'use strict';

    var client = window.Mozilla.Client;
    var version = client._getFirefoxMajorVersion();

    if (client.isFirefox && version >= '70') {

        var menuItem = document.getElementById('js-lockwise-desktop');

        menuItem.classList.remove('hidden');

        document.getElementById('lockwise-button').addEventListener('click', function() {
            Mozilla.UITour.showHighlight('logins');
        });
    }

    window.Mzp.Details.init('.mzp-c-menu-list-title');

})();
