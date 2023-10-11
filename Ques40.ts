interface Album{
    artist:string;
    title:string;
    tracks?:number;
};
const make_album=(artist:string,title: string,tracks?:number)=>{
    let albumObject:Album={
artist,title,
...(tracks != null && {tracks,})
};
return albumObject;
};

console.log(make_album('Atif Aslam', 'DIL DIYYAN GALLA'));
console.log(make_album("ALI ZAFAR","VOH DAIKHNY MEIN SEEDHI SADHI LAGTI"));
console.log( make_album("Ed Sheeran", "Perfect",34)) ;