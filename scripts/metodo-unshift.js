let playlist = ['Funk', 'Hip-Hop', 'Pop'];

console.log("Antes do unshift");
console.table(playlist);

// Adicionando uma novo estilo no início da playlist
playlist.unshift("Rock");

console.log("Depois do unshift");
console.table(playlist);
