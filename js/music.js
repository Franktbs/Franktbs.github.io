const ap = new APlayer({
    container: document.getElementById('aplayer'),
    fixed: true,
    autoplay: false,
    theme: '#FADFA3',
    audio: [
    {
        name: "夜航星 (Night Voyager)",
        artist: '不才 / 三体宇宙',
        url: 'http://music.163.com/song/media/outer/url?id=1431292823.mp3',
        cover: 'http://p1.music.126.net/EIJc2Wt5AEsIHCFcVxm6pg==/109951165033567317.jpg',
    },
      {
        name: '黑暗森林（原曲：Schwarzer Regen）',
        artist: '雲翼星辰',
        url: 'http://music.163.com/song/media/outer/url?id=416892104.mp3',
        cover: 'http://p1.music.126.net/cSmSMA7VdPT9Sn3txlJWJA==/17748316695843356.jpg',
      }
    ]
});