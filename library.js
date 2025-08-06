'use strict';

const plugin = {};

plugin.renderComposer = async (data) => {
    data.tpl.customMessage = 'This is a message from the Tampa Bay composer plugin!';
    return data;
};

plugin.validateComposer = async (data) => {
    return data;
};

module.exports = plugin;