function SkyrimCompanionViewModel(alchemyLists) {
    var self = this;

    this.alchemy = {
        lists: {},
        loadLists: function(callback) {
            $.getJSON("/json/alchemy-list.js", function(data) {
                self.alchemy.lists = ko.mapping.fromJS(data);
                callback();
            });
        }
    };

    //initialization
    this.initialize = function(callback) {
        self.alchemy.loadLists(callback);
    }
}