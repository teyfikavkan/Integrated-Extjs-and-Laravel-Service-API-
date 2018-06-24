/*
 * This file launches the application by asking Ext JS to create
 * and launch() the Application class.
 */
Ext.application({
    extend: 'extjsproject.Application',

    name: 'extjsproject',

    requires: [
        // This will automatically load all classes in the extjsproject namespace
        // so that application classes do not need to require each other.
        'extjsproject.*'
    ],

    // The name of the initial view to create.
    mainView: 'extjsproject.view.main.Main'
});
