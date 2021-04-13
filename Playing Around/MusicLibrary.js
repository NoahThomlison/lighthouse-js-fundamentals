const library = {
  tracks: { t01: { id: "t01",
                   name: "Code Monkey",
                   artist: "Jonathan Coulton",
                   album: "Thing a Week Three" },
            t02: { id: "t02",
                   name: "Model View Controller",
                   artist: "James Dempsey",
                   album: "WWDC 2003"},
            t03: { id: "t03",
                   name: "Four Thirty-Three",
                   artist: "John Cage",
                   album: "Woodstock 1952"}
          },
  playlists: { p01: { id: "p01",
                      name: "Coding Music",
                      tracks: ["t01", "t02"]
                    },
               p02: { id: "p02",
                      name: "Other Playlist",
                      tracks: ["t03"]
                    }
             }
};

/////////////////////////////
// FUNCTIONS TO IMPLEMENT:
/////////////////////////////

// prints a list of all playlists, in the form:
// p01: Coding Music - 2 tracks
// p02: Other Playlist - 1 tracks
const printPlaylists = function() {
       for(const key in library.playlists) {
              let array = (Object.values((library['playlists'][key])))
              let id = array[0]
              let name = array[1]
              let tracks = array[2].length
              console.log(id + ':' + name + tracks)
            }
}

// prints a list of all tracks, using the following format:
// t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
// t02: Model View Controller by James Dempsey (WWDC 2003)
// t03: Four Thirty-Three by John Cage (Woodstock 1952)
const printTracks = function() {
       for(const key in library.tracks) {
              let array = (Object.values((library['tracks'][key])))
              console.log(array)
              let trackNum = array[0]
              let songName = array[1]
              let artistName = array[2]
              let albumName = array[3]
              console.log(trackNum + ': ' + songName + ' by ' + artistName + ' (' + albumName + ')')

            }
}


// prints a list of tracks for a given playlist, using the following format:
// p01: Coding Music - 2 tracks
// t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
// t02: Model View Controller by James Dempsey (WWDC 2003)
const printPlaylist = function(playlistId) {
       let trackAnswer = [];
       let playlistAnswer = library.playlists[playlistId].tracks
       
       let array = (Object.values(library.playlists[playlistId]))
       let id = array[0]
       let name = array[1]
       let tracks = array[2].length
       console.log(`${id}: ${name} - ${tracks} tracks`)


       console.log()
       for(i = 0; i < playlistAnswer.length; i++){
              trackAnswer[i] = library.tracks[playlistAnswer[i]]    
              console.log(trackAnswer[i])
              array = (Object.values((library['tracks'][key])))
              console.log(array)
              trackNum = array[0]
              songName = array[1]
              artistName = array[2]
              albumName = array[3]
              console.log(trackNum + ': ' + songName + ' by ' + artistName + ' (' + albumName + ')')
       }
}


//printPlaylists();
//printTracks();
printPlaylist('p01');