var tracks = require('../models/tracksPlaylistsModel');


exports.displayTracksPlaylists = function (req, res) {
    var request = [req.params.PlaylistsID]
        
    tracks.getAllTracksPlaylists(request, function (err, data) {
        if (err) {
            res.send(err);
        }
        else {
            res.json(data);
        }
    })


};

exports.addTrack = function (req, res) {
    var request = [req.body.playlistID, req.body.trackID];
        
        
    tracks.insertTrack(request, function (err, data) {
        if (err) {
            res.send(err);
        }
        else {
            res.json(data);
        }
    })


};