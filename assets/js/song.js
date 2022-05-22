function song(){
    const $ = document.querySelector.bind(document)
    const $$ = document.querySelectorAll.bind(document)

    const PLAYER_STORAGE_KEY = 'NPQ_PLAYER'

    const musicList = $('.music-list')
    const imageSongPlaying = $('.song-isPlaying-image')
    const nameSongPlaying = $('.song-isPlaying-product-name')
    const authorSongPlaying = $('.song-isPlaying-product-author')
    const audio = $('#audio')
    const btnControl = $('.btn-control-song')
    const playBtn = $('.btn-control-song-play')
    const pauseBtn = $('.btn-control-song-pause')
    const timingSong = $('.song-control-duration-timing')
    const durationSong = $('.song-control-duration-end')
    const progress = $('.song-control-duration-range')
    const nextBtn = $('.btn-next')
    const prevBtn = $('.btn-prev')
    const shuffleBtn = $('.btn-shuffle')
    const repeatBtn = $('.btn-repeat')

    const formAccount = $('.form-account')
    const headerInterfaceFill = $('.header-interface')

    const textSong = $('.sidebar-text-song-play')
    const textSongPhone = $('.song-on-phone-main-text')


    const app = {
        currentIndex: 0,
        isPlaying: false,
        isRandom: false,
        // config: JSON.parse(localStorage.getItem(PLAYER_STORAGE_KEY)) || {},
        isRepeat: false,
        songs: [
            {
                name: 'Đám Cưới Nha',
                singer: 'Hồng Thanh, Mie',
                path: './assets/music/DamCuoiNha.mp3',
                imageNumber: './assets/nummber-image/one.png',
                imageSong: '/assets/image-singer/DamCuoiNha.webp',
                duration: '2:55',
                textSong: `Trai tài gái sắc
                Đôi mình là nhất
                Làng trên xóm dưới
                Đẹp đôi thì có ai bằng
                Yêu nhau mấy mùa trăng
                Đến lúc tính chuyện trăm năm
                Chuyến này anh quyết
                Cưới em liền tay này
                Đàn trai bưng mâm
                Theo sau anh rước em về làm dâu
                Ngày lành trong tháng
                Trầu cau anh sang
                Đeo tay em chiếc nhẫn vàng
                Ôi vui quá xá em ơi
                Rượu mừng mình nâng ly
                Ngày mình vu quy
                Thì ngần ngại chi 1 2 3 dzô hết ly
                Kiệu vàng ngựa ô
                Anh khớp đón em về dinh rồi
                Pháo bay nổ tung trời
                Cùng xây giấc mơ tuyệt vời
                Năm sau anh quyết mà làm giàu
                Cho em sung sướng đến mai sau
                Đừng lo sóng gió
                Chuyện gì mà khó thì cứ để đó anh lo
                Trai tài gái sắc
                Đôi mình là nhất
                Làng trên xóm dưới
                Đẹp đôi thì có ai bằng
                Yêu nhau mấy mùa trăng
                Đến lúc tính chuyện trăm năm
                Chuyến này anh quyết
                Cưới em liền tay này
                Đàn trai bưng mâm
                Theo sau anh rước em về làm dâu
                Ngày lành trong tháng
                Trầu cau anh sang
                Đeo tay em chiếc nhẫn vàng
                Ôi vui quá xá em ơi
                Rượu mừng mình nâng ly
                Ngày mình vu quy
                Thì ngần ngại chi 1 2 3 dzô hết luôn
                Kiệu vàng ngựa ô
                Anh khớp đón em về dinh rồi
                Pháo bay nổ tung trời
                Cùng xây giấc mơ tuyệt vời
                Năm sau anh quyết mà làm giàu
                Cho em sung sướng đến mai sau
                Đừng lo sóng gió
                Chuyện gì mà khó thì cứ để đó anh lo
                Ví dầu cầu ván mà đóng đinh
                Anh sẽ đưa em đi về dinh
                Anh hứa yêu em mãi chung tình
                Cầu tre gập ghềnh mà khó đi
                Anh sẽ dắt tay em dìu đi
                Ôi vui quá xá từ đây hết ế
                Kiệu vàng ngựa ô
                Anh khớp đón em về dinh rồi
                Pháo bay nổ tung trời
                Cùng xây giấc mơ tuyệt vời
                Năm sau anh quyết mà làm giàu
                Cho em sung sướng đến mai sau
                Đừng lo sóng gió
                Chuyện gì mà khó thì cứ để đó anh lo
                `
            },
            {
                name: 'Muốn Em Là',
                singer: 'Keyo',
                path: './assets/music/MuonEmLa.mp3',
                imageNumber: './assets/nummber-image/two.png',
                imageSong: '/assets/image-singer/MuonEmLa.webp',
                duration: '3:47',
                textSong: `Muốn em là má
                Của con anh ở sau này
                Muốn em là con
                Của tía má anh lâu dài
                Nhất bái thiên địa
                Nhị bái cao đường
                Phu thê giao bái
                Đêm nay ta say ta bái tăng hai
                Không còn em là đời anh
                Chẳng ý nghĩa gì
                Thế nên anh phải cố gắng
                Bôn ba ngoài kia chục năm
                Giờ cũng đã có dư
                Gom về quê cưới nàng
                Mời em đi về quê anh
                Chèo xuồng ba lá
                Ngồi trà đá ngoài hồ cá mình cùng ca
                Được nhìn em luôn cười vui
                Là đời anh mãi luôn an bình
                Muốn em là má
                Của con anh ở sau này
                Muốn em là con
                Của tía má anh lâu dài
                Nhất bái thiên địa
                Nhị bái cao đường
                Phu thê giao bái
                Đêm nay ta say ta bái tăng hai
                Em ơi, nói nghe nè
                Người quê mình chân chất
                Đường nhà anh cứ đi bằng chân đất
                Không sao, trưởng làng anh thân nhất
                Lũ nhóc làng bên
                Dám qua đây anh cân tất
                Làm dâu miền Tây
                Không khó nhưng không phải dễ
                Chỉ cần gật đầu
                Anh đón luôn cho phải lễ
                Bà con lối xóm
                Họ bảo em tài ghê
                Một đời yên ấm
                Khi có được chàng trai quê
                Dậy nào người ơi gà gáy ó ò o
                Dậy đi, dậy đi
                Dậy ăn cái chi cho no
                Rồi mình lên xe
                Qua tới thưa mẹ cha
                Một bài ca hai bên nhà kết thông gia
                Mời em đi về quê anh
                Chèo xuồng ba lá
                Ngồi trà đá ngoài hồ cá mình cùng ca
                Được nhìn em luôn cười vui
                Là đời anh mãi luôn an bình
                Muốn em là má
                Của con anh ở sau này
                Muốn em là con
                Của tía má anh lâu dài
                Nhất bái thiên địa
                Nhị bái cao đường
                Phu thê giao bái
                Đêm nay ta say ta bái tăng hai
                Qua ngàn gian nan
                Giờ đây đã đến lúc rồi
                Chúng ta chung một nhà thôi
                Nơi đâu bình yên bằng tình yêu
                Của anh đối với em
                Không một câu dối gian
                Muốn em là má
                Của con anh ở sau này
                Muốn em là con
                Của tía má anh lâu dài
                Nhất bái thiên địa
                Nhị bái cao đường
                Phu thê giao bái
                Đêm nay ta say ta bái tăng hai
                `
            },
            {
                name: 'Yêu Đơn Phương Là Gì',
                singer: 'Hon',
                path: './assets/music/YeuDonPhuongLaGi.mp3',
                imageNumber: './assets/nummber-image/three.png',
                imageSong: '/assets/image-singer/YeuDonPhuongLaGi.webp',
                duration: '3:45',
                textSong:`Yêu đơn phương là gì
                Là ngốc chẳng dám nói ra
                Vậy nói ra ta được gì
                Được thêm một thứ mất đi
                Mất đi giấc mộng đẹp
                Hằng đêm ta vẫn cứ mơ
                Mơ là mơ
                Đẹp long lanh
                Nét dịu dàng luôn lấp lánh
                Tựa nhành hoa
                Tô mùa xuân cho bức tranh
                Nụ cười thơ
                Cũng làm ta lưu luyến nhớ
                Thật lòng mơ
                Nhưng mà ta luôn làm ngơ
                Ngày gặp nhau
                Gỡ được sao những bối rối
                Dòng thời gian
                Vẫn hồn nhiên vẫn cứ trôi
                Rồi từng đêm
                Đêm từng đêm vẫn ướt gối
                Chẳng là chi
                Nên chỉ đơn phương người thôi
                Vậy yêu đơn phương là gì
                Là ngốc chẳng dám nói ra
                Vậy nói ra ta được gì
                Được thêm một thứ mất đi
                Mất đi giấc mộng đẹp
                Hằng đêm ta vẫn cứ mơ
                Mơ là mơ
                Vậy yêu đơn phương là gì
                Là muốn kế bên một chút thôi
                Thế cũng đủ rồi
                Nụ hoa không vương vấn tôi
                Thôi mong đợi gì
                Mà ta có tư cách chi
                Not for me
                Không đau không sao đâu
                Nhưng lệ vương còn đọng trên mi
                Không bên nhau bao lâu
                Mong về sau người đừng quên đi
                Không đau không sao đâu
                Nhưng lệ vương còn đọng trên mi
                Không bên nhau bao lâu
                Mong về sau người đừng quên đi
                Gặp lại nhau
                Nhưng lòng chẳng còn bối rối
                Dòng thời gian
                Vẫn hồn nhiên vẫn cứ trôi
                Từ bờ môi
                Run bật lên những nhức nhối
                Tình đơn phương
                Nên chỉ mong manh vậy thôi
                Vậy yêu đơn phương là gì
                Là ngốc chẳng dám nói ra
                Vậy nói ra ta được gì
                Được thêm một thứ mất đi
                Mất đi giấc mộng đẹp
                Hằng đêm ta vẫn cứ mơ
                Mơ là mơ
                Vậy yêu đơn phương là gì
                Là muốn kế bên một chút thôi
                Thế cũng đủ rồi
                Nụ hoa không vương vấn tôi
                Thôi mong đợi gì
                Mà ta có tư cách chi
                Not for me
                Vậy yêu đơn phương là gì
                Yêu đơn phương là gì
                Yêu đơn phương là gì
                Yêu đơn phương là gì
                Làm ơn xin đừng gieo thêm nỗi nhớ
                Để con tim thôi đợi mong, ngừng mơ
                `
            },
            {
                name: 'Anh Vẫn Ở Đây',
                singer: 'Thành Đạt',
                path: './assets/music/AnhVanODay.mp3',
                imageNumber: './assets/nummber-image/four.png',
                imageSong: '/assets/image-singer/AnhVanODay.webp',
                duration: '5:07',
                textSong: `Người ấy có biết
                Đêm đông em sợ mưa giông
                Người ấy có nắm tay em
                Khi ngủ hay không
                Người giữ hạnh phúc cho ai
                Em chỉ là khóm hoa dại
                Sánh sao bì được
                Với đóa hoa hồng đầy gai
                Màu nắng phai mắt môi em
                Giữa đời lênh đênh
                Hạnh phúc không phải
                Những thứ viết vội sai tên
                Sợ nắng bỏ gió theo mây
                Em sẽ nước mắt vơi đầy
                Ngó nơi này
                Anh vẫn luôn chờ ở đây
                Đợi một người con gái
                Vì yêu mà đau đến điên dại
                Chịu kiếp phai sương
                Vương giọt trên cỏ hoa ven đường
                Đau buồn bỏ sang đây
                Anh sẽ khâu lại hạnh phúc ấy
                Chẳng ngại mưa giông bão tố người ơi
                Một người đàn ông yếu đuối
                Tự cho mình là kẻ cao thượng
                Nhường hết yêu thương
                Khi người đau chở che không được
                Anh nhặt lại từng cơn mưa
                Len lỏi sâu trong ngàn vết cứa
                Chỉ mong em hạnh phúc mãi thôi
                Màu nắng phai mắt môi em
                Giữa đời lênh đênh
                Hạnh phúc không phải
                Những thứ viết vội sai tên
                Sợ nắng bỏ gió theo mây
                Em sẽ nước mắt vơi đầy
                Ngó nơi này
                Anh vẫn luôn chờ ở đây
                Đợi một người con gái
                Vì yêu mà đau đến điên dại
                Chịu kiếp phai sương
                Vương giọt trên cỏ hoa ven đường
                Đau buồn bỏ sang đây
                Anh sẽ khâu lại hạnh phúc ấy
                Chẳng ngại mưa giông bão tố người ơi
                Một người đàn ông yếu đuối
                Tự cho mình là kẻ cao thượng
                Nhường hết yêu thương
                Khi người đau chở che không được
                Anh nhặt lại từng cơn mưa
                Len lỏi sâu trong ngàn vết cứa
                Chỉ mong em hạnh phúc mãi thôi
                Đợi một người con gái
                Vì yêu mà đau đến điên dại
                Chịu kiếp phai sương
                Vương giọt trên cỏ hoa ven đường
                Đau buồn bỏ sang đây
                Anh sẽ khâu lại hạnh phúc ấy
                Chẳng ngại mưa giông bão tố người ơi
                Một người đàn ông yếu đuối
                Tự cho mình là kẻ cao thượng
                Nhường hết yêu thương
                Khi người đau chở che không được
                Anh nhặt lại từng cơn mưa
                Len lỏi sâu trong ngàn vết cứa
                Chỉ mong em hạnh phúc mãi thôi
                Chỉ mong em hạnh phúc mãi thôi
                `
            },
            {
                name: 'Kẹo Bông Gòn',
                singer: 'H2K',
                path: './assets/music/KeoBongGon.mp3',
                imageNumber: './assets/nummber-image/five.png',
                imageSong: '/assets/image-singer/KeoBongGon.webp',
                duration: '3:41',
                textSong: `Có những ấm áp
                Kéo theo em từng ngày
                Đóa hoa đẹp tươi giữa
                Muôn trùng khơi đi tìm ai
                Rằng em đâu hay biết khi
                Màn đêm ghé ngang qua nơi này
                Tan thành mộng mơ
                Nắm tay nàng đời như thơ
                Dịu êm khi thấy em
                Ngày ấy xanh ngát trong cuộc đời
                Gặp em trong giấc mơ
                Mưa thôi đã rơi trên mắt của người
                Từng dòng tin nhắn kia
                Chỉ để thấy người cười
                Và được cùng em
                Bước tiếp hết cuộc đời
                Vì anh đã say đắm trong
                Nghẹn ngào từ bao lâu rồi
                Ngọt ngào hương thơm
                Như tình yêu của đôi ta
                Khi nắng ban mai ươm đầy
                Xua màn đêm giữa phong ba
                Bồng bềnh tựa vào làn mây
                Ôi từng giây đã trôi xa
                Suy tư rối bời nàng ơi
                Nhớ thương đầy vơi lòng chới với
                Từng ngày mặt trời lên cao
                Anh đợi em trước sân ga
                Đôi mắt long lanh to tròn
                Ôi đôi bàn tay thoáng kiêu sa
                Vội vàng từng chiều đi qua
                Hiên nhà ai ngát hương hoa
                Đưa anh khắp chốn thân thương
                Biết đâu một mai
                Năm tháng nhạt nhòa
                Trải qua bao nhiêu đắng cay
                Anh chỉ cần một cái nắm tay
                May mắn thay là vừa mới đây
                Ai mang người tới ngay
                Khi anh trắng tay
                Em làm anh mất cả lý trí
                Đem bán luôn cả linh hồn
                Thể xác không còn chí khí
                Nên muốn theo em
                Mãi để được sinh tồn
                Anh muốn nói với em một vài câu
                Yêu chắc chắn không thể nào phai màu
                Em nếu thích không việc gì phải giấu
                ANH YÊU EM với chữ "M" thật là dài lâu
                Nếu thích thì cứ like
                Anh là thứ nhất
                Làm gì có THINHTHUHAI
                Vì thứ 3 thứ 4 thứ 5 6 7 chủ nhật
                Không phải đi với anh thì chứ ai
                Nhưng dù thế nào thì
                Em ơi chớ có lo
                Mưa bão nắng gắt hay là gió to
                Kệ anh vẫn sẽ ở bên
                Dù mọi thứ trở nên tệ
                Anh chỉ cần em vẫn ở đó
                Em vẫn ở đây
                Em vẫn ở đây để anh
                Được nắm đôi tay này
                Ngọt ngào hương thơm
                Như tình yêu của đôi ta
                Khi nắng ban mai ươm đầy
                Xua màn đêm giữa phong ba
                Bồng bềnh tựa vào làn mây
                Ôi từng giây đã trôi xa
                Suy tư rối bời nàng ơi
                Nhớ thương đầy vơi lòng chới với
                Từng ngày mặt trời lên cao
                Anh đợi em trước sân ga
                Đôi mắt long lanh to tròn
                Ôi đôi bàn tay thoáng kiêu sa
                Vội vàng từng chiều đi qua
                Hiên nhà ai ngát hương hoa
                Đưa anh khắp chốn thân thương
                Biết đâu một mai
                Năm tháng nhạt nhòa
                Ngọt ngào hương thơm
                Như tình yêu của đôi ta
                Khi nắng ban mai ươm đầy
                Xua màn đêm giữa phong ba
                Bồng bềnh tựa vào làn mây
                Ôi từng giây đã trôi xa
                Suy tư rối bời nàng ơi
                Nhớ thương đầy vơi lòng chới với
                Từng ngày mặt trời lên cao
                Anh đợi em trước sân ga
                Đôi mắt long lanh to tròn
                Ôi đôi bàn tay thoáng kiêu sa
                Vội vàng từng chiều đi qua
                Hiên nhà ai ngát hương hoa
                Đưa anh khắp chốn thân thương
                Biết đâu một mai
                Năm tháng nhạt nhòa
                `
            },
            {
                name: 'Chạnh Lòng Thương Cô 2',
                singer: 'Huy Vạc',
                path: './assets/music/ChanhLongThuongCo2.mp3',
                imageNumber: './assets/nummber-image/six.png',
                imageSong: '/assets/image-singer/ChanhLongThuongCo.webp',
                duration: '5:12',
                textSong: `Bước chân về miền quê
                Ai đón ai chờ mà lệ ướt mi em
                Tháng năm vì người đi
                Ta trách sao mình
                Chẳng lo đến khi
                Người thương anh người thương anh
                Để lại bầu trời với nỗi chơi vơi
                Rời mái lá trời giá rét
                Người còn ở bên ta còn không
                Anh lang thang tìm em
                Trong giấc mơ xưa hoài mong
                Anh lang thang tìm em
                Trông tiếng chim đưa mà ngóng
                Thương thân em người con gái
                Phủ sương vai tội không
                Ta không mang được cho em
                Những xa hoa cuộc sống
                Thôi em đi về nơi đất khách
                Ta ôm miền quê
                Không ai đem mình chia
                Hai ngã bơ vơ được nhé
                Ta mong sao ngày sau
                Ta sẽ có duyên gặp nhau
                Chạnh lòng mà thương cô
                Bão tố cũng sớm qua thôi
                Vội dừng chân ở một nơi xa
                Nơi đó có người đã từng lưu luyến
                Ngày và đêm nhung nhớ người ta qua
                Không trách quên rồi đã từ từ lâu
                Ngày em đi cả
                Một trời bỗng tối tăm
                Chẳng hận em bỏ lại
                Anh cả ngàn dặm
                Giữa lúc duyên thì
                Còn đang say đắm
                Cánh đồng hoa tàn
                Theo cơn gió mà lạnh căm
                Mưa trôi dạt theo
                Bước chân của người quen
                Gạt dòng lệ rơi
                Trên đôi mắt em bỏ lại
                Một lần này nữa
                Anh khóc chờ người thương hại
                Dù anh biết là duyên
                Chẳng còn mệt nhoài
                Em nghĩ cho tương lai
                Rằng đêm nay
                Một dòng thư tay
                Anh viết gửi người
                Con gái anh thương
                Bài thơ xưa còn
                In dấu vương nét bút
                Anh tựa người kể tình ca
                Người thương anh người thương anh
                Để lại bầu trời với nỗi chơi vơi
                Rời mái lá trời giá rét
                Người còn ở bên ta còn không
                Anh lang thang tìm em
                Trong giấc mơ xưa hoài mong
                Anh lang thang tìm em
                Trông tiếng chim đưa mà ngóng
                Thương thân em người con gái
                Phủ sương vai tội không
                Ta không mang được cho em
                Những xa hoa cuộc sống
                Thôi em đi về nơi đất khách
                Ta ôm miền quê
                Không ai đem mình
                Chia hai ngã bơ vơ được nhé
                Ta mong sao ngày sau
                Ta sẽ có duyên gặp nhau
                Chạnh lòng mà thương cô
                Bão tố cũng sớm qua thôi
                Lững lờ rồi mà hững hờ rồi mà
                Khóc làm gì mà nhớ mà thương
                Chẳng phận cũng chẳng đành
                Ước nguyện cũng chẳng thành
                Trời í à thương cô
                Nhặt một nhành hoa thắm trên tay
                Người bước về nơi
                Phương đấy quá xa xôi
                Bông lúa đơn côi
                Cố giữ lấy hương thơm
                Chịu lại ai mà đợi
                Lời hẹn năm ấy lứa đôi
                Để lại như gió đấy thôi
                Còn thương sao rời đi
                Để một lần níu với
                Rồi muộn phiền ai
                Trút lên vai nặng gánh
                Để lại ta với những mong manh
                Thương lắm cây xanh trông rồi mong
                Thân đầy bão bùng ôi lạnh lùng
                Nỗi đau ta mang đã hằn sâu
                Biết đâu mai sau có tìm nhau
                Đọc dòng nhật kí
                Nước mắt rơi ướt tim đau
                `
            },
            {
                name: 'Đau Ở Đây Này',
                singer: 'Nal',
                path: './assets/music/DauODayNay.mp3',
                imageNumber: './assets/nummber-image/seven.png',
                imageSong: '/assets/image-singer/DauODayNay.webp',
                duration: '4:39',
                textSong: `Nhìn vào nụ cười ấy
                Đã khiến trái tim anh buồn
                Làm dòng nước mắt rơi vì ai
                Đêm muộn màng
                Ngập ngừng ngập ngừng từng bước
                Đau đớn đớn đau trong lòng
                Em đi rồi còn chi mà mong
                Một lời dứt khoát
                Người tìm lối khác
                Về nơi thật ấm êm
                Có nhớ đâu bên đời
                Một người trông ngóng em quay về
                Đâu đây tiếng gió rì rào hướng đó
                Có thấy bóng em về đâu
                Xin tạm biệt em
                Chúc bên người bền lâu
                Ta như làn mây
                Trôi về cuối bầu trời
                Chiều buông làn gió
                Có còn nói nhiều lời
                Đời không có em
                Lời hát mang tâm tình
                Trong tay tình yêu
                Ta lại không trân trọng
                Em đi cùng ai
                Sao lại đau trong lòng
                Duyên vỡ tan
                Kiếm tìm lời thở than
                Khi không còn yêu nhau
                Người thương hơn đau thật nhiều
                Một chút rung động
                Em về bên ai đường chia hai lối
                Thôi em về đi về đi em
                Em đi theo người đi người đi
                Người ta sẽ xứng đáng hơn anh nhiều
                Xứng đáng hơn anh nhiều
                Ngày em đi
                Ngoài trời mưa rớt rơi âm thầm
                Vậy là chia ly
                Con tim anh lặng câm
                Về bên người ta
                Anh đâu dám thương em nữa
                Thôi đem tình cảm anh đi cất
                Để chi thừa
                Em nói với anh
                Anh còn nhớ tất cả
                Vì cây có lá xanh
                Thay mùa cây vàng ngả
                Em thì khác
                Em vẽ được màu xanh
                Màu đó rất đẹp
                Và lấp đi anh
                Một lời dứt khoát
                Người tìm lối khác
                Về nơi thật ấm êm
                Có nhớ đâu bên đời
                Một người trông ngóng em quay về
                Đâu đây tiếng gió rì rào hướng đó
                Có thấy bóng em về đâu
                Xin tạm biệt em
                Chúc bên người bền lâu
                Ta như làn mây
                Trôi về cuối bầu trời
                Chiều buông làn gió
                Có còn nói nhiều lời
                Đời không có em
                Lời hát mang tâm tình
                Trong tay tình yêu
                Ta lại không trân trọng
                Em đi cùng ai
                Sao lại đau trong lòng
                Duyên vỡ tan
                Kiếm tìm lời thở than
                Khi không còn yêu nhau
                Người thương hơn đau thật nhiều
                Một chút rung động
                Em về bên ai đường chia hai lối
                Thôi em về đi về đi em
                Em đi theo người đi người đi
                Người ta sẽ xứng đáng hơn anh nhiều
                Xứng đáng hơn anh nhiều
                Ta như làn mây
                Trôi về cuối bầu trời
                Chiều buông làn gió
                Có còn nói nhiều lời
                Đời không có em
                Lời hát mang tâm tình
                Trong tay tình yêu
                Ta lại không trân trọng
                Em đi cùng ai
                Sao lại đau trong lòng
                Duyên vỡ tan
                Kiếm tìm lời thở than
                Trong tay tình yêu
                Ta lại không trân trọng
                Em đi cùng ai
                Sao lại đau trong lòng
                Duyên vỡ tan
                Kiếm tìm lời thở than
                `
            },
            {
                name: 'Đào Nương',
                singer: 'Hoàng Vương',
                path: './assets/music/DaoNuong.mp3',
                imageNumber: './assets/nummber-image/eight.png',
                imageSong: '/assets/image-singer/DaoNuong.webp',
                duration: '3:07',
                textSong: `Liệu nhân gian mấy ai thương nàng
                Ngày mai táng có ai đội tang
                Trời mang mang nát thêm tâm trạng
                Người ra đi khiến ta bàng hoàng
                Nhặt hoa rơi trái tim tơi bời
                Bặt tin tức sáu trăm năm trời
                Tìm nơi đâu đã lâu chẳng tới
                Cả một đời ngồi đây chờ đợi
                Gặp lại cô ta còn đau đáu
                Rỏ thêm máu lên trang thơ nhàu
                Nhiều năm qua nơi nào nương náu
                Tại sao mắt vẫn hay đỏ au
                Ngoài trời mưa hay lệ chan chứa
                Từng câu hứa xem như dư thừa
                Lòng đau như triệu triệu vết cứa
                Đám ma nàng vẫn chưa kịp đưa
                Đường thi ngâm đã bao nhiêu lần
                Còn vương vấn trước khi dừng chân
                Đừng than thân trách cho duyên phận
                Kẻ vô tâm khiến cô ngậm hận
                Tình nhanh tan nỗi đau vô hạn
                Phù vân tán nhân sinh mê loạn
                Đề câu thơ khắc trên mặt ván
                Rượu lại tràn còn ai bầu bạn
                Đèn vừa châm chung trà chưa ngấm
                Vội che nón Quai Thao Ba Tầm
                Bạn tri âm không còn hơi ấm
                Làm sao chấm dứt bao khổ tâm
                Lại một tay chôn mộng trong trắng
                Giờ yên giấc thiên thu vĩnh hằng
                Gửi thêm cô triệu triệu vạt nắng
                Khoác cho nàng ánh trăng lạnh băng
                Đèn vừa châm chung trà chưa ngấm
                Vội che nón Quai Thao Ba Tầm
                Bạn tri âm không còn hơi ấm
                Làm sao chấm dứt bao khổ tâm
                Lại một tay chôn mộng trong trắng
                Giờ yên giấc thiên thu vĩnh hằng
                Gửi thêm cô triệu triệu vạt nắng
                Khoác cho nàng ánh trăng lạnh băng
                `
            },
            {
                name: 'Đông Phai Mờ Dáng Ai',
                singer: 'Datkaa',
                path: './assets/music/DongPhaiMoDangAi.mp3',
                imageNumber: './assets/nummber-image/nine.png',
                imageSong: '/assets/image-singer/DongPhaiMoDangAi.webp',
                duration: '4:42',
                textSong: `Mưa rơi mưa đừng rơi
                Chờ mong dáng ai quay về
                Chôn giấu bao câu thề
                Bên mái tranh dưới hiên nhà cao
                Mưa rơi mưa đừng rơi
                Chờ mong dáng ai quay về
                Em bước đi không về
                Đông vương sầu phai màu tình anh
                Tình đời đâu ai biết được
                Ngày gặp lại nơi đây cố nhân xưa
                Cành hồng bay theo gió nhẹ nhàng
                Chạm vào làn tóc rối bay bay
                Chiều về đưa mây với tình mình
                Giờ tựa mùa thu đã sang đông
                Chẳng còn nhiều hơi ấm nồng nàn
                Chạnh lòng nhìn em gót sang ngang
                Lòng người giờ này
                Tựa một bức tranh phai màu
                Bên lầu son
                Còn ai trên đời hiểu thấu
                Giờ này sầu tình
                Tự mình trách thân ngu khờ
                Trao tình yêu cho ai bây giờ ngu ngơ
                Vậy thì xin em đừng nhắc
                Bao nhiêu mộng mơ anh vỡ tan rồi
                Dù mình yêu em đậm sâu
                Anh ôm niềm đau này ai thấu đâu
                Này người xin em đừng nói
                Bên em giờ đây đã có ai rồi
                Cành hồng kia sao tàn phai
                Đau đớn thay dáng ai mờ phai
                Vài giọt nắng vương trên tay
                Thu sang Đông che màu hồng
                Ngày nào đó đi bên nhau
                Dang tay ôm em vào lòng
                Mà giờ đây tình yêu ai
                Đã xa nơi này
                Và người đi
                Giọt lệ đắng trên mi ai
                Anh thương em như vậy mà
                Tình vụn vỡ yêu thương phai
                Em bên ai như vậy là
                Người phụ ta, lời điêu ngoa
                Và kiệu hoa đón em đi rồi
                Tình đời đâu ai biết được
                Ngày gặp lại nơi đây cố nhân xưa
                Cành hồng bay theo gió nhẹ nhàng
                Chạm vào làn tóc rối bay bay
                Chiều về đưa mây với tình mình
                Giờ tựa mùa thu đã sang đông
                Chẳng còn nhiều hơi ấm nồng nàn
                Chạnh lòng nhìn em gót sang ngang
                Lòng người giờ này
                Tựa một bức tranh phai màu
                Bên lầu son
                Còn ai trên đời hiểu thấu
                Giờ này sầu tình
                Tự mình trách thân ngu khờ
                Trao tình yêu cho ai bây giờ ngu ngơ
                Vậy thì xin em đừng nhắc
                Bao nhiêu mộng mơ anh vỡ tan rồi
                Dù mình yêu em đậm sâu
                Anh ôm niềm đau này ai thấu đâu
                Này người xin em đừng nói
                Bên em giờ đây đã có ai rồi
                Cành hồng kia sao tàn phai
                Đau đớn thay dáng ai mờ phai
                Ngày mà em đi người đã
                Cho con tim vô vàn niềm đau
                Rượu nồng tuy cay mà thấu
                Bao nhiêu buồn vui anh giấu trong lòng
                Vậy thì chia li từ đấy
                Anh sẽ không mong chờ người đâu
                Tình đầu xem như trò đùa
                Bơ vơ anh về trong mưa
                Vậy thì xin em đừng nhắc
                Bao nhiêu mộng mơ anh vỡ tan rồi
                Dù mình yêu em đậm sâu
                Anh ôm niềm đau này ai thấu đâu
                Này người xin em đừng nói
                Bên em giờ đây đã có ai rồi
                Cành hồng kia sao tàn phai
                Đau đớn thay dáng ai mờ phai
                `
            },
            {
                name: 'May Mắn Khi Có Em',
                singer: 'Đật Villa, Phạm Sắc Lệnh',
                path: './assets/music/MayManKhiCoEm.mp3',
                imageNumber: './assets/nummber-image/ten.png',
                imageSong: '/assets/image-singer/MaiManKhiCoEm.webp',
                duration: '5:49',
                textSong: `Chỉ mong đời ta
                Sẽ kết duyên cùng nhau
                Vượt bao phong ba
                Luôn có anh ở đây mà
                Ghì chặt bàn tay lên đôi môi của em
                Như thế này
                Thật hạnh phúc
                Cô dâu của anh ngay đây rồi
                Nhẫn cưới anh sẽ trao yêu thương
                Ngọt ngào khi lên thánh đường
                Em là cô gái
                Anh yêu nhất thế gian
                Hai chữ trọn đời cùng nhau suốt đời
                Từ nay về sau
                Hai ta chung nhà em hỡi
                Hãy tin anh người nhé
                Dẫu cho bao ngày sau như thế nào
                Thì em vẫn luôn là vợ của anh
                Ôm em nói rằng
                Dù cho mai sau ta già đi
                Cảm ơn cuộc đời
                Đã mang em đến bên đời anh
                Pháo vu quy rộn rã
                Kết hai gia đình thông gia chúng mình
                Niềm vui cùng nhau
                Thắp nên đường tương lai
                Anh may mắn
                Rằng vì khi được em bên cạnh
                Xua tan muộn phiền
                Âu lo cuộc đời tan nhanh
                Aku cinta kamu
                Bước lên thánh đường
                Hôm nay có em bên cạnh
                Gửi trọn tương lai cho anh người hỡi
                Nhẫn cưới anh sẽ trao yêu thương
                Ngọt ngào khi lên thánh đường
                Em là cô gái
                Anh yêu nhất thế gian
                Hai chữ trọn đời cùng nhau suốt đời
                Từ nay về sau
                Hai ta chung nhà em hỡi
                Hãy tin anh người nhé
                Dẫu cho bao ngày sau như thế nào
                Thì em vẫn luôn là vợ của anh
                Ôm em nói rằng
                Dù cho mai sau ta già đi
                Cảm ơn cuộc đời
                Đã mang em đến bên đời anh
                Pháo vu quy rộn rã
                Kết hai gia đình thông gia chúng mình
                Niềm vui cùng nhau
                Thắp nên đường tương lai
                Anh may mắn
                Rằng vì khi được em bên cạnh
                Xua tan muộn phiền
                Âu lo cuộc đời tan nhanh
                Aku cinta kamu
                Hãy tin anh người nhé
                Dẫu cho bao ngày sau như thế nào
                Thì em vẫn luôn là vợ của anh
                Ôm em nói rằng
                Dù cho mai sau ta già đi
                Cảm ơn cuộc đời
                Đã mang em đến bên anh
                Pháo vu quy rộn rã
                Kết hai gia đình thông gia chúng mình
                Niềm vui cùng nhau
                Thắp nên đường tương lai
                Anh may mắn
                Rằng vì khi được em bên cạnh
                Xua tan muộn phiền
                Âu lo cuộc đời tan nhanh
                Aku cinta kamu
                Anh vẫn trân trọng
                Thời gian khi được bên em
                Aku cinta kamu
                `
            },
            {
                name: 'Thê Lương',
                singer: 'Phúc Chinh',
                path: './assets/music/TheLuong.mp3',
                imageNumber: './assets/nummber-image/eleven.png',
                imageSong: '/assets/image-singer/TheLuong.jpg',
                duration: '5:33',
                textSong: `Nắng xuyên qua hiên nhà
                Chiều tà em tôi bước qua
                Dáng ai trong xế tà
                Nàng đội nghiêng nghiêng nón lá
                Nét xuân xanh yêu kiều
                Làn tóc bay bay dập dìu
                Chắc tương tư ai rồi
                Sao đôi mắt buồn cô liêu
                Và rồi kiệu hồng đưa đón
                Lối về còn mình anh bơ vơ ngẩn ngơ
                Lời thơ bao nhiêu mộng mơ
                Nỡ đành lặng nhìn duyên lỡ
                Nắng kia nỡ đi thật sao
                Đành ôm hết bao niềm đau
                Trầu cau ta mang tìm em chốn đâu
                Gọi cố nhân sao vội quên đi
                Bao câu hứa câu thề
                Từng chiều từng đàn chim én
                Mãi ngóng mãi trông em về
                Tà áo năm xưa còn đây
                Nhưng em đâu rồi người ơi
                Đò sang bên sông
                Có nhớ đến bến này đợi mong
                Người nói đi câu vội chia ly
                Em nỡ sao đành
                Vậy mà ngày nào ai đã nói
                Em chờ đợi anh
                Giọt nước mắt rơi từng đêm thâu
                Giờ đã mất nhau
                Em đã đi rồi
                Thôi không có về được đâu
                Đường về lối nhỏ
                Vắng bóng nàng có phải chăng
                Lòng anh vẫn thế
                Vẫn đợi chờ cũng chẳng phai
                Trách thay do lão nguyệt
                Se duyên nhầm cho đôi lứa
                Nhánh điệp buồn rơi hiu quạnh
                Nhìn kiệu hồng sang đưa lối
                Nếu một ngày em tìm về
                Cùng với những điều đã cũ
                Xin đừng quên là anh nhớ em
                Nhưng chưa bao giờ là đủ cả
                Và em ơi anh biết rằng
                Đến sau cùng cũng vậy thôi
                Anh chỉ buồn vì người đã hứa
                Nhưng sao bây giờ lại vội thay
                Người hỡi nhớ em
                Nhớ muôn ngàn khơi
                Nhìn bên kia sông kìa ai
                Đón mừng cùng tình duyên mới
                Nắng ơi hay quay về đây
                Màn đêm đã lây phủ vây
                Giờ mây bay phương trời xa người có hay
                Gọi cố nhân sao vội quên đi
                Bao câu hứa câu thề
                Từng chiều từng đàn chim én
                Mãi ngóng mãi trông em về
                Tà áo năm xưa còn đây
                Nhưng em đâu rồi người ơi
                Đò sang bên sông có nhớ
                Đến bến này đợi mong
                Người nói đi câu vội chia ly
                Em nỡ sao đành
                Vậy mà ngày nào ai đã nói
                Em chờ đợi anh
                Giọt nước mắt rơi từng đêm thâu
                Giờ đã mất nhau
                Em đã đi rồi
                Thôi không có về được đâu
                Sầu này ai mang thêm vào lòng
                Tiếc cho thân cơ hàn
                Càng đậm sâu đau lắm em hỡi nàng
                Nàng giờ xa hoa ta vẫn còn
                Giữ nguyên mối duyên đầu
                Một lần yêu mang đớn đau mãi về sau
                Gọi cố nhân sao vội quên đi
                Bao câu hứa câu thề
                Từng chiều từng đàn chim én
                Mãi ngóng mãi trông em về
                Tà áo năm xưa còn đây
                Nhưng em đâu rồi người ơi
                Đò sang bên sông có nhớ
                Đến bến này đợi mong
                Người nói đi câu vội chia ly
                Em nỡ sao đành
                Vậy mà ngày nào ai đã nói
                Em chờ đợi anh
                Giọt nước mắt rơi từng đêm thâu
                Giờ đã mất nhau
                Em đã đi rồi
                Thôi không có về được đâu
                Hạt mưa nào rớt chơi vơi lả lơi
                Từng hạt từ đâu mang theo sầu vơi
                Hạt mưa nào đắng trên môi lại rơi
                Dẫu cho nỗi buồn này còn chơi với
                Ngày mai còn chẳng biết sao người ơi
                Đừng hẹn trăm năm chi người ơi
                Áo ai chưa khâu
                Sao em đi xa mất gọi cố nhân ơi
                `
            },
            {
                name: 'Bao Giờ Kết Hôn',
                singer: 'Lý Tuấn Kiệt',
                path: './assets/music/BaoGioKetHon.mp3',
                imageNumber: './assets/nummber-image/twive.png',
                imageSong: '/assets/image-singer/BaoGioKetHon.jpg',
                duration: '3:24',
                textSong: `Cuộc chơi còn vui, bia chưa kịp khui
                Cứ hết mình
                Chuyện kia từ từ tính sau
                Mẹ cha đừng lo tương lai sẽ có
                Con dâu ngoan hiền cùng đàn cháu thơ
                Đi đâu ai cũng hỏi
                Tới bao giờ mày kết hôn
                Hời ơi lo chi sớm
                Mới ba chục từ từ tính sau
                Chỉ một câu hỏi
                Suốt ngày hỏi tới hỏi lui
                Còn ở bên ai thế nào
                Là chuyện của tôi
                Mình còn ham chơi quá trời
                Bạn bè nó kêu
                Coi chừng ngày mai cưới vợ
                Ê đừng nói xui
                Cuộc chơi còn vui, bia chưa kịp khui
                Cứ hết mình
                Chuyện kia từ từ tính sau
                Mẹ cha đừng lo tương lai sẽ có
                Con dâu ngoan hiền cùng đàn cháu thơ
                Cô Ba chú Bảy gặp mặt anh là hỏi
                Khi nào thì mày mới rước dâu
                Mới ba mươi còn tuổi ăn tuổi chơi
                Mà đâu dám tính tới chuyện gia đình
                Mà xui ghê anh lỡ dính với em
                Tính ra duyên rồi hai đứa hỏi han
                Theo anh lên xe cùng nhau mình đi
                Ra mắt với họ hàng
                Tích tịch tình tang tình tang
                Không khí hôm nay rộn ràng
                Thấy anh dắt con dâu về
                Nên xóm trên xóm dưới
                Ai nấy cũng vui mừng
                Còn cha anh cũng đã nói với anh
                Tụi mày cưới nhau đi
                Mọi thứ cứ để tao
                Ra giêng tao mang theo trầu cau
                Rước con dâu ngoan về nhà
                Thiệp mời đã xong
                Quyết định làm đám cưới thôi
                Họ hàng hai bên chấp nhận
                Thì mình tới luôn
                Lòng thì nôn nao đón chờ
                Ngày qua rước dâu
                Không nghĩ một mai
                Chúng mình sẽ là của nhau
                Một hai ba dzô
                Khui bia đi bạn ơi
                Lên bia đi bạn ơi
                Cứ nhấp môi nãy giờ
                Ngồi yên ở đây cho tao nhìn thấy
                Tao lo cho tụi bây
                Chơi hết đêm nay rồi về
                Hôm nay ngồi đây hứa với cha mẹ
                Xây dựng mái ấm con cháu sum vầy
                Sẽ vun đắp tương lai
                Của hai con sau này
                Lo mần ăn nghĩ đến tương lai
                Hết ngày hôm nay con xin khép lại
                Một hai ba dzô
                Khui bia đi bạn ơi
                Lên bia đi bạn ơi
                Cứ nhấp môi nãy giờ
                Ngồi yên ở đây cho tao nhìn thấy
                Tao lo cho tụi bây
                Chơi hết đêm nay rồi về
                Tích tịch tình tang tình tang
                Không khí hôm nay rộn ràng
                Thấy anh dắt con dâu về
                Nên xóm trên xóm dưới
                Ai nấy cũng vui mừng
                Còn cha anh cũng đã nói với anh
                Tụi mày cưới nhau đi
                Mọi thứ cứ để tao
                Ra giêng tao mang theo trầu cau
                Rước con dâu ngoan về nhà
                Tích tịch tình tang
                `
            },
            {
                name: 'Cố Giang Tình',
                singer: 'X2X',
                path: './assets/music/CoGiangTinh.mp3',
                imageNumber: './assets/nummber-image/thirteen.png',
                imageSong: '/assets/image-singer/CoGiangTinh.jpg',
                duration: '4:29',
                textSong: `Trái ngang vỡ tan
                Ai đưa con đò sang
                Bến xưa vẫn mong
                Trông ngóng trong vô vọng
                Đắng cay còn đây
                Sao buông xuôi đôi bàn tay
                Má hồng hây hây thẹn thùng
                Bên anh giờ đâu chẳng thấy
                Trót yêu nhau từ thời mộng mơ
                Tựa vần thơ ghi vào trang vở
                Thuở ban sơ thẹn thùng
                Thương nhớ bằng tất cả ngây thơ
                Lối em đi thì ngày một khác
                Ngọt ngào không thấy
                Chỉ toàn chua chát
                Xuân sắc em tôi
                Sao giờ đây hao gầy xơ xác
                Siết đôi tay ngậm ngùi nơi đây
                Nhìn trời mây duyên mình ai lấy
                Tiếng ai than thở lòng hiu vắng
                Làn sương khói bao vây
                Trách do thân phận anh
                Chẳng thể lo em hương sắc trời
                Mong ngày tới
                Em vui bên tình nhân mới
                Khóc cho nhau một lần rồi thôi
                Không gặp nhau nữa đâu
                Bến sông xưa
                Nơi mình thường ngồi
                Cạnh bên nhau rất lâu
                Áng mây bay ngang trời tựa như
                Ân tình trôi thế thôi
                Lòng không nói
                Nhưng sâu bên trong
                Tim đau nhói mím chặt môi
                Lời em nói
                Lời em quên
                Như dao cứa vào tim gan
                Nỗi buồn anh nếm là từng vị đắng
                Rồi say trong miên man
                Là vì anh nhớ thương em
                Cô thiếu nữ bên sông quê
                Bóng dáng tình xưa ngày nào còn đó
                Sao em đi mãi vẫn không về
                Nhiều lần than thân trách phận
                Trách do vì anh đã phải lòng
                Cảnh đẹp cây đa bến quê sông nước
                Em đi còn ai để trải lòng
                Em cười nói vui vẻ
                Hạnh phúc say đắm bên người ta
                Nón lá đội nghiêng bao ngày anh đợi
                Mặc cho bão táp hay mưa sa
                Em biết không?
                Phút chia ly nhìn nhau rời đi ta cố
                Không để rưng hàng mi
                Ngấm bao nhiêu sầu bi
                Tại vì anh cứ ôm thương nhớ li bì
                Lá vẫn vương hạt sương mà sao
                Nay cố nhân người thương đâu mất
                Vất vả hứa hẹn chi giờ đây
                Cũng phải đem vùi sâu chôn cất
                Khóc cho nhau một lần rồi thôi
                Không gặp nhau nữa đâu
                Bến sông xưa nơi mình thường ngồi
                Cạnh bên nhau rất lâu
                Áng mây bay ngang trời tựa như
                Ân tình trôi thế thôi
                Lòng không nói
                Nhưng sâu bên trong
                Tim đau nhói mím chặt môi
                Câu hò ơi nghe đau nhói
                Khi em buông bỏ đi chữ tình
                Để rồi người bước rồi người quên
                Lúc xưa trao nhau bức thư tình
                Tiếng đàn cò tích tịch tình tang
                Gió đung đưa áng mây hồng
                Hơi men còn vương cạn chén rượu cần
                Nhớ về người thương giấc say nồng
                Anh có thể nói có quyền nhớ
                Không quyền được yêu
                Dù biết là không còn thương
                Không nên chờ lệ ướt ngược chiều
                Lưu bút ghi dòng thương nhớ
                Hoài niệm cũ trên bến sông xưa
                Hương thơm tóc người
                Vương trong nắng
                Khẽ thôi gió nhẹ nhàng đung đưa
                Em vội quên à?
                Phía trước nơi hiên nhà còn mỗi ta
                Thiên ý ngỡ như gần cũng cách xa
                Dáng ai trong xế tà vắng
                Mắt trong xanh mùa hạ
                Liệu có quên tất cả
                Để hóa lại mãi xa
                Khóc cho nhau một lần rồi thôi
                Không gặp nhau nữa đâu
                Bến sông xưa nơi mình thường ngồi
                Cạnh bên nhau rất lâu
                Áng mây bay ngang trời tựa như
                Ân tình trôi thế thôi
                Lòng không nói
                Nhưng sâu bên trong
                Tim đau nhói mím chặt môi
                `
            },
            {
                name: 'Cô Thắm Không Về',
                singer: 'X2X',
                path: './assets/music/CoThamKhongVe.mp3',
                imageNumber: './assets/nummber-image/fourteen.png',
                imageSong: '/assets/image-singer/CoThamKhongVe.jpg',
                duration: '4:14',
                textSong: `Từng là hơi ấm bên đời
                Giờ là cơn gió ngang trời
                Mọi người xung quanh
                Thay nhau cho tôi biết
                Cô Thắm không về nữa đâu
                Đặt trọn niềm tin sai người
                Giờ này ai khóc ai cười
                Thề hẹn làm chi
                Để rồi bỏ đi
                Tôi cố đem tình vun đắp
                Mây hóa ngang trời che lấp
                Tôi vẫn nơi này
                Đợi chờ cô về với tôi
                Là vì tôi quá ngốc nghếch
                Hay là do gia cảnh tôi nghèo
                Gốc đa chỉ còn mình tôi
                Ngồi nhìn trăng lên
                Bao nhiêu kí ức một thời
                Giờ thành cay đắng một đời
                Nhà cao xe sang
                Váy cưới lộng lẫy sớm tối
                Có người đón đưa
                Hình dung theo gió mây ngàn
                Ngồi ôm thương nhớ bẽ bàng
                Phận đời ngang trái
                Giờ biết nói cùng với ai
                Dẫu biết phận mình cay đắng
                Nhưng cớ sao lòng vẫn buồn
                Làm phu làm thuê làm sao
                Mơ cho được ngọc ngà
                Cô Thắm ngày nào bên tôi
                Nay khuất xa dần mất rồi
                Đành thôi tôi phải quên
                Tôi còn nhớ ngày cô đi
                Mưa lâm râm nặng hạt
                Cô vội trao chiếc nhẫn cỏ
                Gương mặt cô lạnh nhạt
                Thề hẹn xưa nay còn đâu
                Khi tôi đã không còn cạnh cô
                Áo gấm lụa đào, cô cất bước đi
                Giữa chốn phù phiếm nơi thành đô
                Cô Thắm ơi!
                Mỗi một ngày thiếu điều
                Tôi nhớ cô lắm
                Ánh đèn vàng thành phố xa hoa
                Đã cướp mất đi cô Thắm
                Túp lều tranh, nay chỉ lẻ bóng
                Đơn điệu trong đó một trái tim
                Chỉ biết đợi chờ cô về
                Trong nỗi tuyệt vọng
                Bóng ai dưới mái hiên
                Tui lau giọt nước mắt
                Sau còn động hai hàng mi
                Đã bao lần, tui nắm lấy
                Thứ tình cảm phai tàn đi
                Con sông xưa, mà vẫn khúc Bồi
                Giờ đây lòng người chỉ Lỡ
                Sao nỡ quên đi
                Thứ ân tình xưa
                Là cả một đời tui ghi nhớ
                Chờ cô về, chờ chiếc hôn
                Chờ một vòng tay ấm áp
                Chờ cô nói cô nhớ tui
                Chỉ là câu nói thấm thoát
                Câu hỏi đó, nợ tình duyên
                Liệu cô có trả lời
                Cô bắt tui chờ, và chờ bao giờ
                Hay tui phải chờ đến chờ đến cả đời
                Từng là hơi ấm bên đời
                Giờ là cơn gió ngang trời
                Mọi người xung quanh
                Thay nhau cho tôi biết
                Cô Thắm không về nữa đâu
                Đặt trọn niềm tin sai người
                Giờ này ai khóc ai cười
                Thề hẹn làm chi
                Để rồi bỏ đi
                Bao nhiêu kí ức một thời
                Giờ thành cay đắng một đời
                Nhà cao xe sang, váy cưới lộng lẫy
                Sớm tối có người đón đưa
                Hình dung theo gió mây ngàn
                Ngồi ôm thương nhớ bẽ bàng
                Phận đời ngang trái
                Giờ biết nói cùng với ai
                Một tiểu thư đài các
                Cô không còn là Cô Thắm xưa
                Nơi đô thành tấp nập
                Cuộc sống cô giờ êm ấm chưa
                Sao buồn vương trên mắt
                Sao đôi lần khóc ướt mi
                Tôi vẫn luôn dõi theo
                Từ cái ngày cô bước đi
                Cô xa nơi mái chèo
                Bến sông nhỏ ta thường qua
                Cô xa nơi đồng cỏ
                Mái tranh nghèo cạnh vườn hoa
                Ánh trăng kia còn đợi
                Nhưng bóng người giờ nơi đâu
                Tôi chỉ biết mượn hơi men
                Tâm sự cùng trăng cho vơi sầu
                `
            },
            {
                name: 'Hết Thương Cạn Nhớ',
                singer: 'Đức Phúc',
                path: './assets/music/HetThuongCanNho.mp3',
                imageNumber: './assets/nummber-image/fifteen.png',
                imageSong: '/assets/image-singer/HetThuongCanNho.jpg',
                duration: '6:22',
                textSong: `Em à anh đã biết
                Là tình yêu này chẳng cần thiết
                Em cần nơi bình yên
                Chứ không phải anh kế bên
                Em đừng giữ lại anh
                Khi trái tim vụn vỡ chưa lành
                Điều ban nãy anh vừa thấy là gì đấy
                Em đã vờ khi hôn ai
                Cận kề bên tai tựa đầu lên vai
                Thấy em đang đắm say
                Chắc em chẳng hay đôi mình vừa chia tay
                Đôi khi tình yêu sẽ hóa nhạt nhòa
                Khi vô tình một trong hai
                Cuốn lấy sai trái đến khi vỡ lỡ
                Cả hai hủy hoại tương lai
                Chẳng cần một ai nữa
                Bất kể ai cũng dư thừa
                Một mình đứng khóc giữa mưa
                Nén cơn đau vào từng hơi thở
                Một người mình chẳng ngừng nhớ
                Nhưng lại quay bước giả vờ
                Bảo rằng mình cũng như em
                Hết thương cạn nhớ
                Sự thật là chỉ mỗi em
                Hết thương cạn nhớ
                Vì lỡ thấy em với người ta
                Sao mà lại dễ quên em mà
                Với tất cả gì đã xảy ra
                Chỉ là còn nhân duyên
                Nên lòng vẫn quyến luyến
                Mai chia cắt muốn cũng chẳng thấy mặt
                Em đã vờ khi hôn ai
                Cận kề bên tai tựa đầu lên vai
                Thấy em đang đắm say
                Chắc em chẳng hay đôi mình vừa chia tay
                Đôi khi tình yêu sẽ hóa nhạt nhòa
                Khi vô tình một trong hai
                Cuốn lấy sai trái đến khi vỡ lỡ
                Cả hai hủy hoại tương lai
                Chẳng cần một ai nữa
                Bất kể ai cũng dư thừa
                Một mình đứng khóc giữa mưa
                Nén cơn đau vào từng hơi thở
                Một người mình chẳng ngừng nhớ
                Nhưng lại quay bước giả vờ
                Bảo rằng mình cũng như em
                Hết thương cạn nhớ
                Sự thật là chỉ mỗi em
                Chẳng cần một ai nữa
                Bất kể ai cũng dư thừa
                Một mình đứng khóc giữa mưa
                Nén cơn đau vào từng hơi thở
                Một người mình chẳng ngừng nhớ
                Nhưng lại quay bước giả vờ
                Bảo rằng mình cũng như em
                Hết thương cạn nhớ
                Sự thật là chỉ mỗi em
                Hết thương cạn nhớ
                Sự thật là chỉ
                Một người giữ một người buông
                `
            },
            {
                name: 'Mây Hồng Đưa Đón',
                singer: 'Datkaa',
                path: './assets/music/MayHongDuaLoi.mp3',
                imageNumber: './assets/nummber-image/sixteen.png',
                imageSong: '/assets/image-singer/MayHongDuaLoi.jpg',
                duration: '4:03',
                textSong: `Làn gió lung lay áng mây bên trời
                Một giấc chiêm bao có em bên đời
                Chẳng biết ta yêu
                Hay là ta đang nằm mơ
                Mà cớ sao tim ơi
                Lại mang bao vấn vương
                Được nắm tay em ở nơi đông người
                Được dắt em đi đến nơi chân trời
                Nhìn nắng rơi rơi
                Trên hàng mi em nhận ra
                Đời hóa nên thơ
                Như là mơ em biết không
                Trời đưa nắng mây hồng
                Theo gió bay phiêu bồng
                Khiến cho lòng anh
                Thêm nhớ mong nhớ thương về em
                Bao lời yêu chưa nói
                Nhưng vì ngại ngùng nên thôi
                Hay là giờ em nói với anh được không
                Tình anh mãi như vậy
                Anh sẽ luôn đong đầy
                Dẫu sao thì đây vẫn có anh
                Có anh chờ em
                Thương mà sao không nói
                Sao còn ngập ngừng trên môi
                Em à
                A há ha á a
                Chỉ là tình cờ mây hồng đưa lối
                Bao lời chưa nói
                Chắc là mình ngại tán em
                Nghĩ lòng mình chờ đâu cần mai mối
                Khi bình minh sáng
                Đến bầu trời chiều nhá nhem
                Mặc dù không dám nhưng anh vẫn đợi chờ
                Ngày dài thêm tháng yêu thương ai một đời
                Giờ thì người nói đi
                I love you
                Cuộc đời này mấy khi
                Mà mình được nói yêu
                Sẽ là một ngày đôi bàn tay nắm
                Bay vào tia nắng đến khi mình già với nhau
                Chằng cần cầu kì, yêu nàng say đắm
                Con đường khuya vắng
                Sẽ cùng nàng dù tới đâu
                Dù mình chưa nói yêu nhau bao giờ mà
                Lòng này thương lắm thương em yêu nhiều
                Và chỉ cần là thế thôi
                Chớ sao
                Mặc kệ đời cứ trôi
                Làn gió lung lay áng mây bên trời
                Một giấc chiêm bao có em bên đời
                Chẳng biết ta yêu hay là ta đang nằm mơ
                Mà cớ sao tim ơi lại mang bao vấn vương
                Vấn vương nhớ thương mỗi khi đêm về
                Được nắm tay em ở nơi đông người
                Được dắt em đi đến nơi chân trời
                Nhìn nắng rơi rơi trên hàng mi em nhận ra
                Đời hóa nên thơ như là mơ em biết không
                Này em yêu ơi em có biết không
                Trời đưa nắng mây hồng
                Theo gió bay phiêu bồng
                Khiến cho lòng anh
                Thêm nhớ mong nhớ thương về em
                Bao lời yêu chưa nói
                Nhưng vì ngại ngùng nên thôi
                Hay là giờ em nói với anh được không
                Tình anh mãi như vậy
                Anh sẽ luôn đong đầy
                Dẫu sao thì đây vẫn có anh
                Có anh chờ em
                Thương mà sao không nói
                Sao còn ngập ngừng trên môi
                Em à
                A há ha á a
                Làm cục cưng hông bé ơi
                Anh cùng em tình tang tính tình
                Về nhà anh lo bé ơi
                Anh mà yêu là yêu hết mình
                Chờ làm sao để nói ra
                Em gì ơi này em gì ơi
                Nhìn về anh đi bé ơi
                Y dè y deee
                Anh yêu em quá trời
                Trời đưa nắng mây hồng
                Theo gió bay phiêu bồng
                Khiến cho lòng anh
                Thêm nhớ mong nhớ thương về em
                Bao lời yêu chưa nói
                Nhưng vì ngại ngùng nên thôi
                Hay là giờ em nói với anh được không
                Tình anh mãi như vậy
                Anh sẽ luôn đong đầy
                Dẫu sao thì đây vẫn có anh
                Có anh chờ em
                Thương mà sao không nói
                Sao còn ngập ngừng trên môi
                Em à
                A há ha á a
                `
            },
            {
                name: 'Người Lạ Thoáng Qua',
                singer: 'Đinh Tùng Huy',
                path: './assets/music/NguoiLaThoangQua.mp3',
                imageNumber: './assets/nummber-image/seventeen.png',
                imageSong: '/assets/image-singer/NguoiLaThoangQua.jpg',
                duration: '4:48',
                textSong: `Phải chăng lúc này
                Em có một người thế thay
                Họ cho em nhiều
                Bên em sớm tối nuông chiều
                Còn anh chỉ là
                Giống như người lạ thoáng qua
                Đau đến tận cùng
                Nhưng vẫn giả vờ hạnh phúc
                Phải chi bây giờ
                Tất cả chỉ là giấc mơ
                Một thương hai chờ
                Em đi anh cũng không ngờ
                Đành ôm kỷ niệm
                Cô đơn mình anh với đêm
                Năm tháng êm đềm
                Yêu em chẳng cần đong đếm
                Vậy mà em nỡ buông tay anh rồi
                Buồn đau anh khóc anh than với trời
                Thương thật lòng sao anh nhận lại bằng không
                Nhành hoa thay lá như em thay lòng
                Sao tim anh không ngừng nhớ mong
                Đến bao giờ mới quên được người mình yêu
                Phải chi bây giờ
                Tất cả chỉ là giấc mơ
                Một thương hai chờ
                Em đi anh cũng không ngờ
                Đành ôm kỷ niệm
                Cô đơn mình anh với đêm
                Năm tháng êm đềm
                Yêu em chẳng cần đong đếm
                Vậy mà em nỡ buông tay anh rồi
                Buồn đau anh khóc anh than với trời
                Thương thật lòng sao anh nhận lại bằng không
                Nhành hoa thay lá như em thay lòng
                Sao tim anh không ngừng nhớ mong
                Đến bao giờ mới quên được người mình yêu
                Vậy mà em nỡ buông tay anh rồi
                Buồn đau anh khóc anh than với trời
                Thương thật lòng sao anh nhận lại bằng không
                Nhành hoa thay lá như em thay lòng
                Sao tim anh không ngừng mong nhớ
                Đến bao giờ mới quên được người mình yêu
                Chẳng bao giờ anh quên được người từng yêu
                `
            },
            {
                name: 'Nụ Cười 18 20',
                singer: 'Doãn Hiếu',
                path: './assets/music/NuCuoi1820.mp3',
                imageNumber: './assets/nummber-image/eighteen.png',
                imageSong: '/assets/image-singer/NuCuoi1820.jpg',
                duration: '4:04',
                textSong: `Những năm tháng ấy mình đã đi qua
                Những đôi mắt ấy nhìn về phương xa
                Dù có bao gian khó hãy nhớ
                Nụ cười là món quà
                Là la la lá la la
                Đời đổi thay thế giới vẫn quay
                Tuổi thanh xuân như gió như mây
                Cười thật tươi lên
                Khi đôi môi ta còn đỏ mọng
                Năm tháng ấy quay lại được không
                Những tháng ngày năm đó
                Ta đã cười thật tươi
                Mười tám đôi mươi
                Những nụ cười đẹp nhất đời
                Dẫu gian khó dẫu phong ba
                Hiên ngang bước sóng gió sẽ qua
                Những tháng ngày năm đó
                Anh cũng cười thật tươi
                Có đôi lời yêu em
                Anh vẫn chưa dám ngỏ lời
                Yêu bầu trời năm ấy
                Cùng ngàn vệt nắng ở cuối trời
                Vẫn nhớ bóng dáng đôi mươi
                Nhớ nụ cười xuân thời
                Thích thì cứ bước chẳng sợ ai chê
                Đam mê phía trước đừng đợi chờ lê thê
                Mơ và hãy cứ ước
                Thanh xuân cùng làm điều phi thường
                Hẹn gặp nhau ở cuối con đường
                Đời đổi thay thế giới vẫn quay
                Tuổi thanh xuân như gió như mây
                Cười thật tươi lên
                Khi đôi môi ta còn đỏ mọng
                Năm tháng ấy quay lại được không
                Những tháng ngày năm đó
                Ta đã cười thật tươi
                Mười tám đôi mươi
                Những nụ cười đẹp nhất đời
                Dẫu gian khó dẫu phong ba
                Hiên ngang bước sóng gió sẽ qua
                Những tháng ngày năm đó
                Anh cũng cười thật tươi
                Có đôi lời yêu em
                Anh vẫn chưa dám ngỏ lời
                Yêu bầu trời năm ấy
                Cùng ngàn vệt nắng ở cuối trời
                Vẫn nhớ bóng dáng đôi mươi
                Nhớ nụ cười xuân thời
                Đã mãi xa rồi
                Thời thanh xuân tươi nồng của tôi
                Phải sống hạnh phúc
                Nước mắt không rơi
                Sau này ta sẽ có tất cả
                Nhưng không có chúng ta
                Oh oh oh
                Những tháng ngày sau đó
                Cũng phải cười thật tươi
                Còn nhớ hay không
                Những nụ cười đẹp nhất đời
                Yêu bầu trời năm ấy
                Cùng ngàn vệt nắng ở cuối trời
                Vẫn nhớ bóng dáng đôi mươi
                Nhớ nụ cười xuân thời
                Na na na na
                Oh oh oh
                Yeah yeah Eh eh eh oh oh oh
                Đưa tay đây nào
                Mãi bên nhau bạn nhá
                `
            },
            {
                name: 'Phận Duyên Lỡ Làng',
                singer: 'Phát Huy T4',
                path: './assets/music/PhanDuyenLoLang.mp3',
                imageNumber: './assets/nummber-image/nineteen.png',
                imageSong: '/assets/image-singer/PhanDuyenLoLang.jpg',
                duration: '4:17',
                textSong: `Em như hoa dịu dàng nồng nàn
                Khiến con tim ta nhớ nhung từng đêm
                Ánh mắt ấy hiền hòa mặn tình
                Anh trai nghèo nhưng đem lòng thương cô
                
                Con sông quê nơi mình thường ngồi
                Dưới bóng trời nơi phương xa có nhớ không
                Tâm thư tay gửi về nơi đó
                Nàng nhận chưa hay đã trôi xa về đâu
                
                Trời sầu trời buông mây vây đen
                Lòng buồn càng thêm hơi say men
                Chờ người về lại nơi khi xưa đôi ta vui bên nhau dưới cánh diều
                Tình anh này chỉ trao riêng em thôi
                Còn thương còn mong bao nhiêu đêm trôi
                
                Phận dở dang, duyên ta lỡ làng
                Nhìn em cười vui đêm vu quy
                Giọt sương đọng nhẹ trên đôi mi
                Phận duyên này gửi trong gió bay lên cao mây xanh xa ngút ngàn
                
                Hòa tiếng đàn cò nghe đâu đây
                Mùi hương còn vương em đâu hay
                Mái tranh nghèo thiếu em vắng lặng
                
                Trời xanh bao la nàng vừa quay đi mây mù kéo tới
                Nàng thay lòng về chốn xa hoa vội mặc lên mình áo mới
                Ở nơi đó nơi phố thị liệu có còn nhớ bờ sông
                Nơi ta thường ngồi khi đêm xuống giờ chỉ mỗi tôi chờ mong
                
                Trước bão mưa xa
                Bầu trời thanh yên nắng gió ngả vàng
                Nhẫn cỏ ta trao hạnh phúc khi xưa giờ cũng đã tàn
                Cô bên ai gắm lụa muôn màu hy vọng không đầy nước mắt
                Mong giấc mơ nàng được trọn vẹn còn lại đau đớn ta mang
                
                Phút em đi vì nghèo nên tay anh không giữ lấy
                Lệ 2 hàng mi men say bầu bạn phương xa em đâu phải thấy
                Tiếng cò lặn cho lòng thêm buồn thêm nỗi nhớ em
                Thương cô mãi kiếp cả 1 đời nơi mái tranh nghèo chẳng quên
                
                Mưa gió giông
                Cũng không bằng nhìn em quay đi
                Cành hoa tàn từ ngày em rời
                Bước chân bên thềm tim này như dao cắt
                `
            },
            {
                name: 'Từng Yêu',
                singer: 'Phan Duy Anh',
                path: './assets/music/TungYeu.mp3',
                imageNumber: './assets/nummber-image/twenty.png',
                imageSong: '/assets/image-singer/TungYeu.jpg',
                duration: '5:12',
                textSong: `Có kí ức nào đẹp hơn ngày đôi ta bắt đầu
                Có đớn đau nào nặng hơn ngày mình xa nhau
                Có đôi mắt nào buồn hơn bờ mi em tuôn sầu
                Có đắng cay nào bằng em vội vàng qua mau
                Người đàn ông đang đi bên em là người như thế nào
                Sợ người ta không yêu thương em anh biết phải làm sao
                
                Nếu 1 ngày người em yêu bội bạc
                Em đừng cần những thứ cao sang
                Nếu sau này họ ra đi vội vàng
                Anh vẫn chờ em dẫu muộn màng
                Biết em thương người ấy đã rất nhiều
                Anh hỏi lòng anh có bao nhiêu
                Trái tim em giờ đã quên nuông chiều
                Xin đừng quên ta đã từng yêu
                `
            },
            {
                name: 'Ừ Có Anh Đây',
                singer: 'Tino',
                path: './assets/music/UCoAnhDay.mp3',
                imageNumber: './assets/nummber-image/twenty-one.png',
                imageSong: '/assets/image-singer/UCoAnhDay.jpg',
                duration: '6:05',
                textSong: `Anh chàng ôm gối nằm
                Nghĩ suy về cô gái
                Anh thầm yêu cô ấy
                Cũng lâu lắm rồi
                Nhưng chưa thành đôi
                Nhiều lần anh nằm mơ thấy nàng
                Nắm tay đi bên người khác
                Giật mình ra mồ hôi ướt đẫm
                Cứ như thế này
                Sống sao bây giờ
                Anh chàng cũng mấy lần
                Nói dăm ba câu lại thôi
                Chấp nhận làm chàng trai
                Đóng vai anh hai
                Để gần cô gái
                Và giờ anh lại ôm gối nằm
                Nghĩ suy về cô ấy
                Thôi thầm yêu mãi mãi
                Có khi vẫn hơn bị chối từ
                Rồi khi em khóc
                Ừ có anh đây
                Một khi vấp ngã
                Ừ có anh đây
                Rồi khi em muốn có ai bên cạnh
                Để em khóc thật lớn
                Để vơi nỗi buồn
                Cánh tay anh này
                Trái tim anh này
                Ừ có anh đây
                Ôi mùa mưa tới rồi
                Chàng trai vẫn nằm ôm gối
                Cô nàng bên anh trai
                Có thêm đôi vai
                Tựa vào êm ái
                Một ngày kia người ta thấy nàng
                Sánh đôi đi bên người khác
                Chàng lặng nghe mồ hôi ướt đẫm
                Cứ như thế này
                Sống sao bây giờ
                Anh chàng ôm đoá hồng
                Bước qua nhà cô gái
                Thôi thì liều một phen
                Nói ra một lần không còn hối tiếc
                Và giờ đây tận mắt thấy nàng
                Nắm tay hôn môi người khác
                Họ bên nhau thì thầm với nhau
                Chính là những điều
                Anh muốn nói với nàng
                Rồi khi em khóc
                Ừ có anh đây
                Một khi vấp ngã
                Ừ có anh đây
                Rồi khi em muốn có ai bên cạnh
                Để em khóc thật lớn
                Để vơi nỗi buồn
                Cánh tay anh này
                Trái tim anh này
                Ừ có anh đây
                Qua mùa mưa mất rồi
                Chẳng ai thấy chàng trai ấy
                Cô nàng chẳng mấy chốc
                Đã đi theo chồng
                Ngôi nhà bỏ không
                Chẳng lâu sau
                Người ta tới tìm
                Để đưa cô một lá thư
                Nhưng chẳng tìm được cô
                Lá thư trả về trên ban thờ chàng
                Bao người tới tiễn chàng
                Chỉ không thấy mình cô gái
                Cô chẳng hề hay biết
                Đã có một người
                Yêu mình đến thế
                Mở bao thư người ta thấy chàng
                Viết dăm ba câu gửi cô
                Vậy là chàng trai
                Đành lòng nhắm mắt
                Lá thư cuối cùng
                Nói thay lời chàng
                Rồi khi em khóc
                Ừ có anh đây
                Một khi vấp ngã
                Ừ có anh đây
                Rồi khi em muốn có ai bên cạnh
                Để em khóc thật lớn
                Để vơi nỗi buồn
                Cánh tay anh này
                Trái tim anh này
                Ừ có anh đây
                Cần lau nước mắt
                Ừ có anh đây
                Chùn chân mỏi gối
                Ừ có anh đây
                Một ngày em có bước đi theo người
                Chẳng cần anh ở bên
                Sẻ chia ngọt bùi
                Cánh tay anh này
                Trái tim anh này
                Ừ có anh đây
                Cánh tay anh này
                Trái tim anh này
                Ừ có anh đây
                `
            },
            {
                name: 'Yêu Rồi',
                singer: 'Tino',
                path: './assets/music/YeuRoi.mp3',
                imageNumber: './assets/nummber-image/twenty-two.png',
                imageSong: '/assets/image-singer/YeuRoi.jpg',
                duration: '3:23',
                textSong: `Khi yêu ai rồi
                Chẳng cần biết bên ngoài
                Nắng to hay là mưa rào
                Chỉ cần biết phải chạy rất nhanh
                Để được tới nơi có người mình thương
                Khi yêu ai rồi
                Chẳng cần biết mai này
                Có vui hay là không
                Chỉ cần bàn tay bên bàn tay
                Bờ vai bên bờ vai không thôi
                Tình yêu là những đứa trẻ rong chơi
                Chỉ cần tìm thấy nhau sẽ cần nhau thôi
                Và cùng chơi với nhau
                Chẳng hề lo âu
                Ngày mai sau thế nào
                Và ta là những đứa trẻ rong chơi
                Rồi ta tìm thấy nhau
                Nên gần nhau thôi
                Từ ngày ta có nhau
                Chẳng hề lo âu
                Chẳng xa cách đâu
                Khi yêu ai rồi
                Chẳng cần biết bên ngoài
                Nắng to hay là mưa rào
                Chỉ cần biết phải chạy rất nhanh
                Để được tới nơi có người mình thương
                Khi yêu ai rồi
                Chẳng cần biết mai này
                Có vui hay là không
                Chỉ cần bàn tay bên bàn tay
                Bờ vai bên bờ vai không thôi
                Tình yêu là những đứa trẻ rong chơi
                Chỉ cần tìm thấy nhau sẽ cần nhau thôi
                Và cùng chơi với nhau
                Chẳng hề lo âu
                Ngày mai sau thế nào
                Và ta là những đứa trẻ rong chơi
                Rồi ta tìm thấy nhau
                Nên gần nhau thôi
                Từ ngày ta có nhau
                Chẳng hề lo âu
                Chẳng xa cách đâu
                Tình yêu là những đứa trẻ rong chơi
                Chỉ cần tìm thấy nhau sẽ cần nhau thôi
                Và cùng chơi với nhau
                Chẳng hề lo âu
                Ngày mai sau thế nào
                Và ta là những đứa trẻ rong chơi
                Rồi ta tìm thấy nhau
                Nên gần nhau thôi
                Từ ngày ta có nhau
                Chẳng hề lo âu
                Chẳng xa cách đâu
                Từ ngày ta có nhau
                Chẳng hề lo âu
                Chẳng xa cách đâu
                `
            },
            {
                name: 'Anh Thương Em Nhất Mà',
                singer: 'Lã. x Log x TiB',
                path: './assets/music/AnhThuongEmNhatMa.mp3',
                imageNumber: './assets/nummber-image/twenty-three.png',
                imageSong: '/assets/image-singer/AnhThuongEmNhatMa.jpg',
                duration: '3:13',
                textSong: `Ngược dòng thời gian quay về quá khứ
                Anh tìm lại những kí ức hôm nào
                Lục tìm trong trí nhớ ngày đầu thu
                Anh mỉm cười nhớ bóng dáng của em
                Ngày em đến bên anh là món quà
                Anh thầm ước nguyện từ bấy lâu
                Ngày em đến bên anh là ánh dương
                Mang tình yêu ngập tràn nơi anh
                Anh thương em nhất mà
                Cớ sao bây giờ lại vội chia xa
                Anh yêu em nhất mà
                Cớ sao bây giờ lại vội buông tay
                Từng day dứt ngày ấy
                Vẫn luôn vẹn nguyên
                Tình mình tựa mây bay
                Lời theo gió nhẹ trôi tiếng yêu đầu môi
                Lụi tàn nào ai hay
                Có người hỏi sao anh lại viết nhạc
                Vì khó quên em
                Nên không thể làm việc khác
                Cớ sao anh luôn bên phím đàn
                Vì nỗi nhớ em luôn tích tịch tình tang
                Chuyện tình đẹp hay chuyện tình dở dang
                Tình mình có thơ hay chỉ là lỡ làng
                Tình mình giống như
                Nàng Kiều và Kim Trọng
                Bắt đầu thật đẹp để rồi toàn thở than
                Anh đã có cho mình những sai lầm
                Chất thành đống nên giờ thật khó sửa
                Từ khi xa em nỗi nhớ tới làm bạn
                Còn đêm nay nỗi buồn đến gõ cửa
                Anh tua ngược bộ phim của kí ức
                Để một lần nữa sống trong kỷ niệm xưa
                Tìm một ngày được bên nhau lần nữa
                Sao khó như tìm hạt nắng trong vệt mưa
                Khu vườn tình yêu không chăm sóc
                Chỉ còn cành khô và vài nắm cỏ dại
                Làm sao để lau mi em khóc
                Làm sao để tình mình thắm trở lại?
                Anh không muốn cuộc sống mình vô vị
                Như Tô Thị hóa đá chờ nghìn năm
                Anh chỉ muốn làm cao áp đô thị
                Nơi em tối thì anh tới hỏi thăm
                Xa em rồi anh sẽ nhớ
                Nhớ lần đầu đôi mình khẽ chạm môi
                Nhớ cả cái nắm tay chiều hôm ấy
                Nhớ cả những cái ôm mới đây thôi
                Anh vẫn có cho mình những câu hỏi
                Về chuyện tình của hai ta
                Rằng anh thương em nhất mà
                Cớ sao bây giờ mình phải vội chia xa?
                Anh thương em nhất mà
                Cớ sao bây giờ lại vội chia xa
                Anh yêu em nhất mà
                Cớ sao bây giờ lại vội buông tay
                Từng day dứt ngày ấy
                Vẫn luôn vẹn nguyên
                Tình mình tựa mây bay
                Lời theo gió nhẹ trôi tiếng yêu đầu môi
                Lụi tàn nào ai hay
                Anh thương em nhất mà
                Cớ sao bây giờ, lại vội buông tay
                `
            },
            {
                name: 'Lời Yêu Ngây Dại',
                singer: 'Kha',
                path: './assets/music/LoiYeuNgayDai.mp3',
                imageNumber: './assets/nummber-image/twenty-four.png',
                imageSong: '/assets/image-singer/LoiYeuNgayDay.jpg',
                duration: '6:05',
                textSong: `Long lanh giọt sương kia như trôi
                Là vài câu nói chưa kịp nghĩ tới
                Chờ xuân kia sang
                Yêu thương ghé ngang buông lời
                Cho anh mang nụ cười nàng
                Vội đem vào trong dòng thơ
                Cho hồn bay giữa giấc mơ
                Và cho anh đem tiếng yêu nhỏ
                Nhẹ gieo vào nơi đầu môi
                Cho lòng ai khỏi ngẩn ngơ
                Mưa đem yêu thương sắc màu
                Mặc cho thẳm sâu trong
                Muôn lần nhói đau
                Ta đem dịu êm với trái tim dạt dào
                Hãy để con tim của em vẫn
                Say nồng khát khao
                Dịu dàng em yên ắng
                Vội mang ánh trăng lẻ loi
                Khẽ trôi theo khung trời
                Ngã sa vào nơi đầu môi
                Ngoài em ra tôi chẳng thể
                Say đắm thêm một ai
                Lá rơi buông bẽ bàng
                Thế thay lời yêu ngây dại
                Dịu dàng em yên ắng
                Vội mang ánh trăng lẻ loi
                Khẽ trôi theo khung trời
                Ngã sa vào nơi đầu môi
                Ngoài em ra tôi chẳng thể
                Say đắm thêm một ai
                Lá rơi buông bẽ bàng
                Thế thay lời yêu ngây dại
                Đưa câu hát phiêu du theo tiếng đàn
                Nhặt gom ấm áp vương trên mây ngàn
                Dìu hạnh phúc qua nơi
                Chỉ còn có em thôi
                Em là giọt sương long lanh ta đã mang
                Đưa câu hát phiêu du theo tiếng đàn
                Nhặt gom ấm áp vương trên mây ngàn
                Dìu hạnh phúc qua nơi
                Chỉ còn có em thôi
                Em là giọt sương long lanh ta đã mang
                Để cho anh mang nụ cười nàng
                Vội đem vào trong dòng thơ
                Cho hồn bay giữa giấc mơ
                Và cho anh đem tiếng yêu nhỏ
                Nhẹ gieo vào nơi đầu môi
                Cho lòng ai khỏi ngẩn ngơ
                Mưa đem yêu thương sắc màu
                Mặc cho thẳm sâu trong
                Muôn lần nhói đau
                Ta đem dịu êm với trái tim dạt dào
                Hãy để con tim của em vẫn
                Say nồng khát khao
                Dịu dàng em yên ắng
                Vội mang ánh trăng lẻ loi
                Khẽ trôi theo khung trời
                Ngã sa vào nơi đầu môi
                Ngoài em ra tôi chẳng thể
                Say đắm thêm một ai
                Lá rơi buông bẽ bàng
                Thế thay lời yêu ngây dại
                Dịu dàng em yên ắng
                Vội mang ánh trăng lẻ loi
                Khẽ trôi theo khung trời
                Ngã sa vào nơi đầu môi
                Ngoài em ra tôi chẳng thể
                Say đắm thêm một ai
                Lá rơi buông bẽ bàng
                Thế thay lời yêu ngây dại
                `
            },
            {
                name: 'SIMPLE LOVE',
                singer: 'Obito x Seachains x Davis x Lena',
                path: './assets/music/SimpleLove.mp3',
                imageNumber: './assets/nummber-image/twenty-five.png',
                imageSong: '/assets/image-singer/SimpleLove.jpg',
                duration: '3:57',
                textSong: `Đưa chân dạo quanh nơi khắp phố xá
                Bụi bay vào mắt
                Bụng reo đói mãi
                Anh tấp vào shop mua ly mì gói
                Đập vào đôi mắt anh muốn chới với
                Wao oh my god
                Nàng tựa là ai xinh đến đắm đuối
                Không may thì ngất
                Đứng chết im tức khắc
                Nàng nhẹ nhàng lướt qua
                Tiếng sét ái tình đã đánh
                Xem như duyên chúng ta
                Tay buông cả ly mì xuống
                Nhiều người nhìn quá đê
                Anh không nói tiếng Hàn Quốc
                Nhưng biết nói sharanghea
                Lo đứng mộng mơ em đi đâu mất yahh
                I'm fall in love yahh
                Đôi chân chạy nhanh hết tất ngóc ngách
                To find you girl yahh
                Em trôi thật mau
                Giữa đám đông bon chen người qua yahh
                Anh mãi chạy theo sau bóng em
                Dẫu xa thật xa yahh
                Lạc vào hình bóng nàng
                Nét tinh tươm xinh ghê yah
                Em tựa tiên chốn nào
                Ghé sang qua nơi anh vậy
                Môi ngây ngô đỏ mềm
                Khiến anh như tan ra yah
                Thôi thì đã lỡ rồi
                Mình trót yêu luôn em nha yahhh
                Simple love girl, simple love girl
                Simple love, simple love
                Oh simple love girl
                Ôi trên đấy giáng xuống thần tiên
                Đi vào trong giấc mơ
                Baby girl, I’m gonna say
                You’re the only one
                Simple love girl, simple love girl
                Simple love, simple love
                Oh simple love girl
                Rolling with me on the way
                You my candy girl
                Saranghae saranghae simple love girl
                Lạc vào đồng cỏ xanh
                Thiên thần vai có cánh
                Cây lá thì có cành
                Em thì phải có anh
                Thấy nụ cười em nhu mì
                Anh như điện đứt cầu chì
                Loé lên một tia lửa
                Tia lửa mém cầu kỳ
                Thiên đường không còn
                Nên nàng rơi vào nơi trần gian sao
                Anh thì kiên cường
                Mong rằng gánh em bao phần gian lao
                Em gì ơi
                Em có mong cuộc tình đơn giản
                Nói ra điều cần nói
                Họ lại nghĩ là anh đang giỡn, bởi vì
                Một phút ba mươi giây
                Nàng vút xa nơi đây, ye
                Đang nơi đâu
                Đi tìm hoài khắp nơi bao lâu, ye
                Thấy em đang ngồi trên ghế
                Ahhh đôi Nike tinh tế
                Ahhh ăn gì mà xinh thế
                Khiến anh quên luôn con đường về
                Lạc vào hình bóng nàng
                Nét tinh tươm xinh ghê yah
                Em tựa tiên chốn nào
                Ghé sang qua nơi anh vậy
                Môi ngây ngô đỏ mềm
                Khiến anh như tan ra yah
                Thôi thì đã lỡ rồi
                Mình trót yêu luôn em nha yahhh
                Simple love girl, simple love girl
                Simple love, simple love
                Oh simple love girl
                Ôi trên đấy giáng xuống thần tiên
                Đi vào trong giấc mơ
                Baby girl, I’m gonna say
                You’re the only one
                Simple love girl, simple love girl
                Simple love, simple love
                Oh simple love girl
                Rolling with me on the way
                You my candy girl
                Saranghae saranghae simple love girl
                Thứ em thấy ở TV show
                Chẳng có đâu, tình yêu nhiệm màu
                Don't believe what people show off
                Yeah, they just wanna show off
                Show off, show off
                Show off, show off, show off
                I just need a simple love, girl 
                `
            },
            {
                name: 'Cấm 1',
                singer: 'KindyA',
                path: './assets/music/Cam1.mp3',
                imageNumber: './assets/nummber-image/twenty-six.png',
                imageSong: '/assets/image-singer/Cam1.jpg',
                duration: '4:13',
                textSong: `Có đôi lúc cũng thấy mệt mỏi
                Muốn dừng lại và đứng trước gương
                Vì nếu anh có bản lĩnh đi tiếp
                Thì có lẽ
                Em chẳng muốn khiêm nhường
                Cuối con đường đó
                Có phải em bỏ lại nỗi đau
                Là khi chấp nhận làm kẻ thứ ba
                Một cách hoán đổi không hoàn hảo
                Cũng do ngốc mà thôi
                Đã biết là cho không nhận lại
                Tại sao lại nói cho người ta biết
                Để người ta phỉ là nói dai
                Cũng có lúc anh bị trầm cảm
                Vì một cú sốc như vô hình
                Một người anh quen cướp em đi mất
                Liệu rằng anh có thể bình tĩnh
                Được như vậy hay không
                Hay em xem đó là trò đùa
                Cũng nhiều bài hát anh gọi tên em
                Ở trong nhận thức anh từng hứa
                Ờ nếu lời hứa
                Mà anh từng hứa với em
                Hôm nay là dư thừa
                Thì em cứ phũ
                Như chưa từng nghe
                Một lời chia tay không còn nữa
                Vẫn biết rằng anh tốt với em
                Nhưng em lại yêu một người khác
                Tình yêu tam giác là ba mũi dao
                Biết như vậy mà vẫn đổi chác
                Sao có thể em cho anh khùng
                Và chia tay trong dứt khoát
                Nhưng anh sẽ cấm em làm anh đau
                Tạo vết thương bên trong thể xác này
                Anh cấm em nói yêu anh
                Khi đang trong vòng tay người khác
                Và anh cấm em nhìn vào anh
                Bằng đôi mắt đen
                Không còn cảm giác
                Anh cấm em đi bên nó
                Mà lúc nào cũng nghĩ đến anh
                Đối với tư cách một người đi trước
                Giá trị của anh vẫn hơn một lần
                Anh cấm em đem so sánh
                Ai tốt hơn những việc anh làm
                Vì em chưa hiểu được hết
                Khái niệm một người đàn ông
                Cần phải quan tâm
                Anh cấm em rơi nước mắt
                Khi vô tình có nghe bài hát này
                Anh cũng sẽ cấm em nghe từ cấm
                Khi em không còn là người ấy
                Anh cấm em nói yêu anh
                Khi đang trong vòng tay người khác
                Và anh cấm em nhìn vào anh
                Bằng đôi mắt đen
                Không còn cảm giác
                Anh cấm em đi bên nó
                Mà lúc nào cũng nghĩ đến anh
                Đối với tư cách một người đi trước
                Giá trị của anh vẫn hơn một lần
                Anh cấm em đem so sánh
                Ai tốt hơn những việc anh làm
                Vì em chưa hiểu được hết
                Khái niệm một người đàn ông
                Cần phải quan tâm
                Anh cấm em rơi nước mắt
                Khi vô tình có nghe bài hát này
                Anh cũng sẽ cấm em nghe từ cấm
                Khi em không còn là người ấy
                Anh cấm em hay thức khuya
                Uống cà phê vào hai giờ sáng
                Biết sức khỏe em không được tốt
                Thì đừng cố gắng quên đi thời gian
                Anh cấm em đi về đêm
                Khi đã không còn anh bên cạnh
                Vì anh biết chắc
                Nó không thể cản đi
                Những hạt mưa trên mái tóc mềm
                Anh biết là em sẽ hỏi
                Lấy tư cách gì mà anh xen vào
                Thì cũng đơn giản là một thằng ngốc
                Làm tròn trách nhiệm mặc dù xa nhau
                Em quên đi việc anh làm
                Nếu anh nói em bảo kể công
                Rồi em sẽ nói là em không bắt
                Tại sao anh làm rồi còn dài dòng
                Với nó thì mọi việc khác
                Đó không làm cũng được ghi nhận
                Mà thôi đâu còn quan trọng nữa
                Đâu phải chỉ trong vài lần
                Đành ngậm miệng lại
                Để em vui thôi
                Nói sao thì chuyện cũng vậy rồi
                Chỉ tiếc là không thể tặng cho em
                Hạnh phúc mà em mơ thôi
                Nhưng cấm thì vẫn cứ cấm
                Mặc dù vẫn biết là bảy phần thừa
                Có phải món ăn em tự tay làm
                Bên trong chiếc hộp không còn chứa
                Cảm thấy cấm em quá đủ rồi
                Lần này anh cấm bản thân anh
                Anh cấm anh không thể cười
                Nếu như ngày mai
                Không có em bên cạnh
                Anh cấm em nói yêu anh
                Khi đang trong vòng tay người khác
                Và anh cấm em nhìn vào anh
                Bằng đôi mắt đen
                Không còn cảm giác
                Anh cấm em đi bên nó
                Mà lúc nào cũng nghĩ đến anh
                Đối với tư cách một người đi trước
                Giá trị của anh vẫn hơn một lần
                Anh cấm em đem so sánh
                Ai tốt hơn những việc anh làm
                Vì em chưa hiểu được hết
                Khái niệm một người đàn ông
                Cần phải quan tâm
                Anh cấm em rơi nước mắt
                Khi vô tình có nghe bài hát này
                Anh cũng sẽ cấm em nghe từ cấm
                Khi em không còn là người ấy
                Anh cấm em nói yêu anh
                Khi đang trong vòng tay người khác
                Và anh cấm em nhìn vào anh
                Bằng đôi mắt đen
                Không còn cảm giác
                Anh cấm em đi bên nó
                Mà lúc nào cũng nghĩ đến anh
                Anh cấm em nói yêu anh
                Khi đang trong vòng tay người khác
                Và anh cấm em nhìn vào anh
                Bằng đôi mắt đen
                Không còn cảm giác
                Anh cấm em đi bên nó
                Mà lúc nào cũng nghĩ đến anh
                Đối với tư cách một người đi trước
                Giá trị của anh vẫn hơn một lần
                Anh cấm em đem so sánh
                Ai tốt hơn những việc anh làm
                Vì em chưa hiểu được hết
                Khái niệm một người đàn ông
                Cần phải quan tâm
                Anh cấm em rơi nước mắt
                Khi vô tình có nghe bài hát này
                Anh cũng sẽ cấm em nghe từ cấm
                Khi em không còn là người ấy
                Anh cấm em nói yêu anh
                Khi đang trong vòng tay người khác
                Và anh cấm em nhìn vào anh
                Bằng đôi mắt đen
                Không còn cảm giác
                Anh cấm em đi bên nó
                Mà lúc nào cũng nghĩ đến anh
                Đối với tư cách một người đi trước
                Giá trị của anh vẫn hơn một lần
                Anh cấm em đem so sánh
                Ai tốt hơn những việc anh làm
                Vì em chưa hiểu được hết
                Khái niệm một người đàn ông
                Cần phải quan tâm
                Anh cấm em rơi nước mắt
                Khi vô tình có nghe bài hát này
                Anh cũng sẽ cấm em nghe từ cấm
                Khi em không còn là người ấy    
                `
            },
            {
                name: 'Cấm 2',
                singer: 'KindyA',
                path: './assets/music/Cam2.mp3',
                imageNumber: './assets/nummber-image/twenty-seven.png',
                imageSong: '/assets/image-singer/Cam2.jpg',
                duration: '3:20',
                textSong: `Có cấm em thêm nữa
                Thì cũng có được gì đâu
                Có cấm em ra sao
                Thì mọi chuyện như vậy rồi
                Không thể lo cho em được
                Thì thôi để em đi
                Về nơi ấy
                Em hạnh phúc hơn nhiều
                Không có anh em vẫn vui
                Đúng không
                Ở đó đó là khoảng trời
                Em có thể bay mà
                Ờ em chính là một thiên thần
                Có đôi mắt rất là long lanh
                Anh yêu cái cảm giác đó
                Nhìn em rất nhiều lần
                Không thể buông em một phút
                Dù rằng khoảng cách đó rất xa
                Có bao giờ em nghĩ là cũng vì nó
                Mà nhiều lần anh đã vấp ngã
                Rồi tự đứng dậy
                Tự xoa dịu đôi bàn chân
                Rồi cố bước tiếp mặc cho là biết
                Sẽ ngã thêm ngàn lần
                Thôi cứ ráng
                Cho nó trọn nghĩa vụ
                Sắp đặt một tình yêu
                Lỡ có một ngày em dang tay phủi
                Thì cũng bớt đau được ít nhiều
                Nửa năm sống bên người ta
                Em có hạnh phúc được gì không
                Hay những lúc nó buồn
                Nhờ em thỏa mãn đi
                Cái dục vọng mà nó cần
                Ui cũng chả thèm quan tâm
                Anh chỉ biết yêu em vậy thôi
                Ai muốn xuyên tạc như thế nào
                Miệng đời anh cấm làm sao nổi
                Anh chỉ có thể cấm bản thân
                Ngăn cảm xúc được đề ra
                Anh chỉ có thể cấm nước mắt
                Anh không được lăn trên đôi má
                Chứ làm sao cấm quá khứ của em
                Cấm lỗi lầm mà em từng phạm
                Việc đó là nằm ngoài tầm kiểm soát
                Với những thói quen anh từng làm
                Kể từ hôm nay
                Anh sẽ gửi gửi vào beat
                Những lời nhạc
                Dồn thêm cảm xúc mà anh cho đi
                Không cần phải xé ra rời rạc
                Đốt nó cháy ra thành tro
                Không để em ghép lại được đâu
                Chỉ xin cơn gió cuốn đi thật nhanh
                Đừng để vết đen này bạc màu
                Không thể cấm, đoán ký ức
                Một người con gái mà mình yêu
                Chỉ cần rộng mở một chút tâm hồn
                Để nghe em nói rồi sẽ hiểu
                Hay cứ cố chấp làm theo vết gấp
                Đã được đặt sẵn ngay từ đầu
                Thì thôi tắt nhạc nói chia tay
                Viết ra làm gì cho thêm đau
                Anh rất thích trời mưa
                Cơ bản không vì nó làm mát
                Mà vì che giấu đi giọt nước mắt
                Đang làm tan nát trái tim này
                Sai lầm của ai bây giờ ai gánh
                Rồi khiến cả hai phải khó chịu
                Thôi đổ cho anh là lỗi của anh
                Dù gì thì cũng đã quá nhiều
                Ừ nói sao ta
                Cũng bình thường thôi mà
                Chỉ là hơi nhói ở trong lồng ngực
                Ngủ một giấc cũng sẽ qua
                Oài mười hai giờ rồi
                Vẫn ngồi lảm nhảm và tự kỉ
                Đang ngồi suy nghĩ có nên cấm tiếp
                Hay cứ mặc kệ như vậy đi
                Để anh gánh vác
                Những nỗi lo trên lưng
                Lâu nay em chịu đựng
                Để anh thay em dằn vặt một chút
                Những thứ suy nghĩ làm nặng lòng
                Hai chữ nguyên tắc và niềm tin
                Không thể sát nhập thành một
                Liệu anh có cần phải rơi nước mắt
                Để cho lần sau được tốt hơn
                Vẫn là nhạc thôi
                Có thể giải tỏa được một chút
                Rồi khi tắt nhạc trở lại với đời
                Thì lại tự kỉ thêm một lúc
                Lại thấy chữ nhạt
                Trong bức tranh sống động
                Vây quanh anh hằng ngày
                Thứ anh tin tưởng vẫn là giấc ngủ
                Để có thể tìm thấy ngày mai
                Kể từ hôm nay
                Anh sẽ gửi gửi vào beat
                Những lời nhạc
                Dồn thêm cảm xúc mà anh cho đi
                Không cần phải xé ra rời rạc
                Đốt nó cháy ra thành tro
                Không để em ghép lại được đâu
                Chỉ xin cơn gió cuốn đi thật nhanh
                Đừng để vết đen này bạc màu
                Không thể cấm, đoán ký ức
                Một người con gái mà mình yêu
                Chỉ cần rộng mở một chút tâm hồn
                Để nghe em nói rồi sẽ hiểu
                Hay cứ cố chấp làm theo vết gấp
                Đã được đặt sẵn ngay từ đầu
                Thì thôi tắt nhạc nói chia tay
                Viết ra làm gì cho thêm đau
                Kể từ hôm nay
                Anh sẽ gửi gửi vào beat
                Những lời nhạc
                Dồn thêm cảm xúc mà anh cho đi
                Không cần phải xé ra rời rạc
                Đốt nó cháy ra thành tro
                Không để em ghép lại được đâu
                Chỉ xin cơn gió cuốn đi thật nhanh
                Đừng để vết đen này bạc màu
                Không thể cấm, đoán ký ức
                Một người con gái mà mình yêu
                Chỉ cần rộng mở một chút tâm hồn
                Để nghe em nói rồi sẽ hiểu
                Hay cứ cố chấp làm theo vết gấp
                Đã được đặt sẵn ngay từ đầu
                Thì thôi tắt nhạc nói chia tay
                Viết ra làm gì cho thêm đau
                `
            },
            {
                name: 'Cấm 3',
                singer: 'KindyA',
                path: './assets/music/Cam3.mp3',
                imageNumber: './assets/nummber-image/twenty-eight.png',
                imageSong: '/assets/image-singer/Cam3.jpg',
                duration: '4:09',
                textSong: `Em à mưa Sài Gòn lạnh lắm
                Đừng bắt anh phải đứng dưới mưa
                Để nhìn những cảnh tượng chạnh lòng
                Có bao giờ em tự hỏi
                Sự ích kỉ quá hẹp hòi
                Định nghĩa với em khái niệm thế nào
                Thì em mới cho là đẹp đôi hả
                Trả lời anh biết đi
                Cái đó là cái gì
                Lại tự kỉ lại là cấm
                Dằm lại thấm vào trong tim
                Lại rap love lại nhàm chán
                Nhưng đó là cả một nỗi niềm
                Có ai hiểu được đâu
                Tuy đây không phải là lần đầu
                Nỗi đau không kết chỉ mới bắt đầu
                Thì tại vì sao phải chôn giấu
                Có chăng là cấm trong hình thức
                Khi em vẫn vui bên người ta
                Vậy cần gì cấm cho phiền phức
                Nhưng không thể vứt đâu phiền à
                Anh vẫn sẽ cấm em mọi thứ
                Thay cho một chút lời quan tâm
                Anh sẽ cấm em gọi cho anh
                Hãy cứ để anh mãi âm thầm
                Sẽ xuất hiện chỉ trong vài phút
                Khi em đau khổ vì một ai
                Và sẽ biến mất chỉ trong một giây
                Khi em bên ai con đường dài
                Không để em thấy được đâu
                Xem như là anh chưa từng đến
                Hãy để nơi đây là một khoảng trống
                Mà chưa bao giờ em nhắc tên
                Không mệt mỏi không thay đổi
                Mặc cho khoảng cách còn rất xa
                Nếu không là nhạc thì vẫn là rap
                Vì ở đây vẫn là tất cả
                Những gì anh có cho em
                Những thứ mà sẽ thuộc về em
                Bù lại anh cấm em không là em
                Trở lại lúc trước cho anh xem đi
                Anh cấm em không là em
                Buông bản thân vào chốn không đèn
                Anh càng cấm khi em đã sai
                Mà vẫn tỏ vẻ như chẳng quan tâm
                Anh cấm em chửi anh phiền
                Khi tất cả chỉ là thói quen
                Vẫn là lo lắng vẫn là yêu thương
                Mặc dòng cảm xúc này
                Đang mắc nghẹn
                Anh cấm em ở nơi đó
                Nó quẳng tình cảm em vào sọt rác
                Và anh tự cấm anh nhớ đến em
                Xem như với anh là anh hình phạt
                Và anh cấm trong đầu em nghĩ
                Trái tim anh đã hết yêu em
                Trong khi lời lẽ mà anh viết ra
                Luôn có tên em
                Bên trong đính kèm mà
                Buông nắm
                Liệu có giữ được em không
                Em vẫn cứ bước tiếp
                Dù người ấy không có thật lòng
                Ừ là cảm giác đó khi chia tay
                Mà chỉ một người phải gánh chịu
                Ừ thì nụ cười anh vẫn như thế
                Nhưng sâu bên trong đau rất nhiều
                Ừ vì giới hạn anh không cho phép
                Nỗi đau có thể được dừng lại
                Ừ vì con tim chưa có khoảng trống
                Đón nhận người mới trong tương lai
                Ừ thì lại cấm
                Cấm ký ức của anh
                Một lần nữa lặp lại
                Ừ không muốn thấy em đi bên ai
                Nhưng sao anh vẫn cứ gặp hoài
                Nếu biết trước sẽ như thế
                Liệu rằng anh có yêu em không
                Bởi nếu quá khứ mà có lặp lại
                Thì ai chẳng muốn không chọn lầm
                Nhưng đối với anh đó thì lại khác
                Khác rất nhiều với người ta
                Anh sẽ chọn em
                Dù cho quá khứ này
                Có lặp lại cả ngàn lần
                Đơn giản cảm giác đó
                Không lẫn lộn
                Hòa trộn em giống với một ai
                Vẫn là một nơi an toàn với anh
                Gửi cả niềm tin chặn đường dài
                Chỉ là chữ cấm đó
                Giúp anh bớt đi gánh nặng
                Nên anh vẫn cấm vẫn chạm vào mic
                Có thể chỉ còn trong vài lần
                Anh cấm em không là em
                Buông bản thân vào chốn không đèn
                Anh càng cấm khi em đã sai
                Mà vẫn tỏ vẻ như chẳng quan tâm
                Anh cấm em chửi anh phiền
                Khi tất cả chỉ là thói quen
                Vẫn là lo lắng vẫn là yêu thương
                Mặc dòng cảm xúc này
                Đang mắc nghẹn
                Anh cấm em ở nơi đó
                Nó quẳng tình cảm em vào sọt rác
                Và anh tự cấm anh nhớ đến em
                Xem như với anh là anh hình phạt
                Và anh cấm trong đầu em nghĩ
                Trái tim anh đã hết yêu em
                Trong khi lời lẽ mà anh viết ra
                Luôn có tên em
                Bên trong đính kèm mà
                Anh cấm em không là em
                Buông bản thân vào chốn không đèn
                Anh càng cấm khi em đã sai
                Mà vẫn tỏ vẻ như chẳng quan tâm
                Anh cấm em chửi anh phiền
                Khi tất cả chỉ là thói quen
                Vẫn là lo lắng vẫn là yêu thương
                Mặc dòng cảm xúc này
                Đang mắc nghẹn
                Anh cấm em ở nơi đó
                Nó quẳng tình cảm em vào sọt rác
                `
            },
            {
                name: 'Cấm 4',
                singer: 'KindyA',
                path: './assets/music/Cam4.mp3',
                imageNumber: './assets/nummber-image/twenty-nine.png',
                imageSong: '/assets/image-singer/Cam4.jpg',
                duration: '3:57',
                textSong: `Một lần nữa
                Tìm quá khứ cho bản thân mình
                Quay nhìn lại là ảo ảnh
                Xem như vô hình
                Góc phố nhỏ buông gót nhẹ
                Nhặt kỉ niệm đêm
                Không chắc chắn
                Có thể không sẽ gặp được em
                Anh đi tìm lại chút lời nói
                Chút mùi vị của tình yêu
                Là nơi góc phố dưới ánh đèn
                Độc bước cô đơn như mọi chiều
                Tuy không chắc là sẽ gặp em
                Cũng một mình bước qua đây
                Nhưng lại làm thế để tìm niềm vui
                Giúp anh có thể sống qua ngày
                Nếu là hạnh phúc
                Không bàn cãi
                Anh sẽ bất chấp tìm quá khứ
                Nếu là nỗi đau vẫn tìm lại
                Gắn thêm hai chữ là giá như
                Giá như ngày đó em không ra đi
                Chỉ vì những điều không xứng đáng
                Giá như anh có thể khóc cùng em
                Ảnh hưởng tâm trạng em đang mang
                Thì ngày hôm nay
                Không như thế có phải không
                Tận hưởng niềm vui
                Bên một người khác
                Xin đừng nhìn anh và buồn lòng
                Anh chỉ mong muốn
                Vô tình gặp em
                Ở nơi con đường ta từng bước
                Nhưng anh sẽ cấm em đi bên ai
                Bước qua số phận anh từng cược
                Đánh đổi bản thân
                Không
                Với anh dường như là tất cả
                Cả một sự nghiệp cả một gia đình
                Nhưng chữ tình yêu còn rất xa
                Vì vậy anh cấm em nói
                Nguyên nhân em chia tay anh
                Là tất yếu
                Anh cấm em nói anh không vì em
                Thật sự với anh là rất nhiều
                Một lần nữa
                Tìm quá khứ cho bản thân mình
                Quay nhìn lại là ảo ảnh
                Xem như vô hình
                Góc phố nhỏ buông gót nhẹ
                Nhặt kỉ niệm đêm
                Không chắc chắn
                Có thể không sẽ gặp được em
                Không lấy làm lạ
                Vì ngày đó
                Em buông tay anh ra đi
                Làm những bài rap như vậy tặng em
                Và chưa bao giờ em hiểu vì
                Sự lãng mạn lời ngọt ngào
                Từ cảm xúc
                Thôi đi
                Với em tình yêu qua từng câu nói
                Chỉ là một thứ gì xa xỉ
                Nhưng em à
                Em có biết được hay không
                Từng dòng anh viết
                Đều chứa nỗi nhớ
                Nỗi đau và cả một nỗi lòng
                Em có quyền không nghe anh nói
                Và đọc lời nhạc anh viết ra
                Ngược lại anh cấm em luôn chà đạp
                Một thứ tình cảm rất thật thà
                Và khi em khóc
                Anh sẽ cấm
                Cấm em nhớ bờ vai anh
                Vì anh không còn
                Là một chỗ dựa
                Anh biết sẽ có người thay anh
                Anh lại cứ cấm đó
                Anh cấm em nhớ bàn tay anh
                Vị trí của anh đã có người khác
                Hoàn hảo hơn anh gấp trăm lần
                Yên tâm đi em nhé
                Đừng nhớ đừng nghĩ nữa về anh
                Hãy để một mình anh nhớ về em
                Xem như cuộc đời anh bất hạnh
                Nếu như không thuộc về nhau
                Hãy để chỉ mình anh thuộc về em
                Và việc của em là thuộc về ai
                Nhưng liệu người ta
                Có thuộc về em không
                Một lần nữa
                Tìm quá khứ cho bản thân mình
                Quay nhìn lại là ảo ảnh
                Xem như vô hình
                Góc phố nhỏ buông gót nhẹ
                Nhặt kỉ niệm đêm
                Không chắc chắn
                Có thể không sẽ gặp được em
                Lời nhạc là cái thứ
                Mà em chán ghét nhất ở anh
                Đúng ra
                Anh không nên viết tiếp về em
                Nhưng không có người thứ hai
                Cho anh những cảm xúc
                Để viết những bài rap như vậy
                Lúc nào em cũng cho rằng
                Anh đang chung sống
                Với một cô nào đó
                Đúng anh không phủ nhận
                Và đó chính là cô đơn
                Một lần nữa
                Tìm quá khứ cho bản thân mình
                Quay nhìn lại là ảo ảnh
                Xem như vô hình
                Góc phố nhỏ buông gót nhẹ
                Nhặt kỉ niệm đêm
                Không chắc chắn
                Có thể không sẽ gặp được em
                `
            },
            {
                name: 'Cấm 5',
                singer: 'KindyA',
                path: './assets/music/Cam5.mp3',
                imageNumber: './assets/nummber-image/thirty.png',
                imageSong: '/assets/image-singer/Cam5.jpg',
                duration: '3:36',
                textSong: `Vẫn là như mọi ngày
                Anh mở mắt trong một màu đen
                Nhìn ngày mai bằng nụ cười
                Nhưng chẳng bình thường như hứa hẹn
                Không chắc anh cần em đến thế
                Nhưng giờ em thuộc về ai đây
                Viết lời lẽ này cứ lòng vòng
                Có thể anh chưa từng muốn vậy
                Thẳng và thắng
                Em về nhất
                Trong một cuộc tình đầy cá cược
                Okay anh thua rồi
                Nhưng sao với anh
                Chưa gì em đã bước
                Tìm cuộc đua khác
                Ừ chắc có lẽ sẽ dài hơn
                Và với bản năng dù em có té
                Cũng chẳng có ai để dỗi hờn
                Đúng không
                Cho dù anh nói có sai
                Thì thôi cũng chẳng sửa
                Anh khóc quá nhiều rồi
                Nên giờ cũng chẳng còn ngại
                Khi trời mưa
                Thấy mắc cười rồi tự cười
                Nhưng cũng là nhạt như mọi khi
                Nghĩ cũng đúng ha
                Thắng em
                Cũng chẳng có gì là thú vị
                Cứ cho anh ngu đi
                Quay lại tìm anh mọi lúc
                Khi em cần
                Thì có làm sao đâu
                Cấm năm
                Đồng nghĩa anh ngu đã năm lần
                Nhưng đừng lầm tưởng
                Anh cầu xin tình yêu từ em
                Không phải đâu
                Chỉ là quan tâm em thêm một chút
                Ừ hơn cả lúc ban đầu
                Anh cấm em
                Hơn thua anh với ai
                Từng cử chỉ
                Thực tế với giả tạo
                Suy nghĩ thử xem em cần gì
                Anh cấm khi gặp anh
                Em quay mặt về nơi khác
                Tại sao không nhìn thử
                Con rối vô tâm em đã tạc
                Anh cấm em luôn miệng rằng
                Thằng kia tốt hơn anh
                Người hi sinh kẻ chiếm đoạt
                Thì lấy tư cách gì so sánh
                Nói như vậy quá rõ ràng
                Sự thật không thừa cũng chẳng thiếu
                Vì vậy anh cấm em im lặng
                Và nói với anh em chẳng hiểu
                Nói cứng miệng vậy thôi
                Chứ sâu bên trong cũng đau lắm
                Mỗi lần cấm đâu phải dễ
                Thật ra anh cũng rất lao tâm
                Nghĩ về em nghĩ về nó
                Đôi khi thấy khó thôi cho qua
                Nhưng rồi lại nhắc
                Cho bản thân nhớ
                Bởi khi làm vậy anh cho là
                Trở thành rapper khuyết tật
                Sẽ trở nên thật ở trong lòng
                Ừ ậy chắc vui
                Vờ không biết
                Để không phải mệt ở bên trong
                Chắc anh sẽ mù
                Để không thấy
                Những dòng trạng thái em và ai
                Anh sẽ khiếm thính
                Để không nghe thấy
                Lời nói bạn bè anh đồn đại
                Tốt nhất là câm
                Để không cấm em
                Quá phiền phức như bây giờ
                Chỉ còn ú ớ theo từng nhịp bass
                Có lẽ sẽ hòa chút hơi thở
                Viết tiếp gì nữa đây
                Đôi khi thật sự anh bế tắc
                Nỗi đau thì nhiều đó
                Nguyên nhân chỉ một
                Lời nhạc này không chặt
                Đôi khi thắc mắc nhiều lắm
                Chẳng biết làm nhạc này vì ai
                Là vì bản thân
                Hay vì níu kéo một người nào đó
                Chẳng quay lại
                Bước như vậy nếu là sai
                Vậy thì con đường nào là đúng
                Anh cũng muốn mơ lắm giấc mơ đẹp
                Để thả lời nhạc vào không trung
                Nhưng rồi
                Anh cấm em
                Hơn thua anh với ai
                Từng cử chỉ
                Thực tế với giả tạo
                Suy nghĩ thử xem em cần gì
                Anh cấm khi gặp anh
                Em quay mặt về nơi khác
                Tại sao không nhìn thử
                Con rối vô tâm em đã tạc
                Anh cấm em luôn miệng rằng
                Thằng kia tốt hơn anh
                Người hi sinh kẻ chiếm đoạt
                Thì lấy tư cách gì so sánh
                Nói như vậy quá rõ ràng
                Sự thật không thừa cũng chẳng thiếu
                Vì vậy anh cấm em im lặng
                Và nói với anh em chẳng hiểu
                Anh cấm em
                Hơn thua anh với ai
                Từng cử chỉ
                Thực tế với giả tạo
                Suy nghĩ thử xem em cần gì
                Anh cấm khi gặp anh
                Em quay mặt về nơi khác
                Tại sao không nhìn thử
                Con rối vô tâm em đã tạc
                Anh cấm em luôn miệng rằng
                Thằng kia tốt hơn anh
                Người hi sinh kẻ chiếm đoạt
                Thì lấy tư cách gì so sánh
                Nói như vậy quá rõ ràng
                Sự thật không thừa cũng chẳng thiếu
                Vì vậy anh cấm em im lặng
                Và nói với anh em chẳng hiểu
                `
            },
        ],
        setConfig(key, value) {
            this.config[key] = value;
            localStorage.setItem(PLAYER_STORAGE_KEY, JSON.stringify(this.config))
        },

        render() {
            const htmls = this.songs.map((song,index) => {
                return `
                        <li class="music-list-item ${index === this.currentIndex ? 'music-list-item-active':''}" data-index="${index}">
                            <div  class="music-list-item-song">
                                <img class="music-list-item-image" src="${song.imageNumber}" alt="">
                                <div class="music-list-item-song">
                                    <div  title="${song.name}" data-index="${index}" class="music-list-item-song-active">
                                        <img class="music-list-item-song-active-img" src=".${song.imageSong}" alt="">
                                        <div class="music-list-item-song-active-icon music-list-item-song-active-is"><i class="fa-solid fa-play"></i></div>
                                        <ul class="music-list-item-song-effect">
                                            <li class="music-list-item-song-effect-item"></li>
                                            <li class="music-list-item-song-effect-item"></li>
                                            <li class="music-list-item-song-effect-item"></li>
                                            <li class="music-list-item-song-effect-item"></li>
                                        </ul>
                                    </div>
                                    
                                    <div class="music-list-item-song-product">
                                        <h4 title="${song.name}" class="music-list-item-song-product-namesong">${song.name}</h4>
                                        <a class="music-list-item-song-product-link" href="#">
                                            <p class="music-list-item-song-product-link-author">${song.singer}</p>
                                        </a>
                                        
                                    </div>
                                </div>
                            </div>
                            <div class="music-list-item-select">
                                <a  title="Tải xuống" class="music-list-item-select-download" href="${song.path}" download="">
                                    <i class="fa-solid fa-download"></i>
                                </a>
                                <i class="fa-solid fa-ellipsis"></i>
                            </div>
                        </li>
                `
            }).join('')
            musicList.innerHTML = htmls
            
        },
        difineProperties(){
            Object.defineProperty(this, 'currentSong', {
                get() {
                    return this.songs[this.currentIndex]
                }
            })
        },
        handleEvent() {
            const _this = this
             // Xử lý play
             btnControl.onclick = () => {
                 if(_this.isPlaying)
                    audio.pause()
                else
                    audio.play()
             }

            //Khi song đang được play
            audio.onplay = () => {
                imageSongPlaying.style.animation = 'around linear 10s infinite'

                _this.isPlaying = true
                playBtn.classList.remove('btn-control-song-active')
                pauseBtn.classList.add('btn-control-song-active')
                const melodySong = $$('.music-list-item-song-active-icon')
                const melodySongIcon = $$('.music-list-item-song-effect')
                melodySong[_this.currentIndex].classList.toggle('music-list-item-song-active-is')
                melodySongIcon[_this.currentIndex].classList.toggle('music-list-item-song-active-is')
            }

            //Khi song đang được pause
            audio.onpause = () => {
                imageSongPlaying.style.animationPlayState = 'paused'
                _this.isPlaying = false
                playBtn.classList.add('btn-control-song-active')
                pauseBtn.classList.remove('btn-control-song-active')
                const melodySong = $$('.music-list-item-song-active-icon')
                const melodySongIcon = $$('.music-list-item-song-effect')
                melodySong[_this.currentIndex].classList.toggle('music-list-item-song-active-is')
                melodySongIcon[_this.currentIndex].classList.toggle('music-list-item-song-active-is')
            }

            //Khi tiến độ bài hát thay đổi
            audio.ontimeupdate = () => {
                if(audio.duration){
                    const progressPersent = audio.currentTime/audio.duration * 100
                    progress.value = progressPersent
                }
                const music_crrt = audio.currentTime
                const timeRunMinute = Math.floor(music_crrt/60)
                const timeRunSecond = Math.floor(music_crrt%60)
                if(timeRunSecond < 10)
                    timingSong.innerText = `${timeRunMinute}:0${timeRunSecond}`
                else
                    timingSong.innerText = `${timeRunMinute}:${timeRunSecond}`
                // console.log(`${timeRunMinute}:${00}`)
            }

            //Khi seek
            progress.onchange = () => {
                audio.currentTime = progress.value * audio.duration / 100
            }

            progress.onmousedown = () => {
                audio.ontimeupdate = false
            }

            progress.onmouseup = () => {
                audio.ontimeupdate = () => {
                    if(audio.duration){
                        const progressPersent = audio.currentTime/audio.duration * 100
                        progress.value = progressPersent
                    }
                    const music_crrt = audio.currentTime
                    const timeRunMinute = Math.floor(music_crrt/60)
                    const timeRunSecond = Math.floor(music_crrt%60)
                    timingSong.innerText = `${timeRunMinute}:${timeRunSecond < 10 ? `0${timeRunSecond}`:timeRunSecond}`
                }
            }

            window.onkeydown = (e) => {
                if(e.code === 'Space'){
                    btnControl.click()
                }

                if(e.code === 'Escape'){
                    formAccount.click()
                    headerInterfaceFill.click()
                }
            }

            nextBtn.onclick = () => {
                if(_this.isRandom){
                    _this.playRandomSong()
                }
                else
                    _this.nextSong()
                audio.play()
                _this.render()
            }

            prevBtn.onclick = () => {
                if(_this.isRandom){
                    _this.playRandomSong()
                }
                else
                    _this.prevSong()
                audio.play()
                _this.render()
            }

            //Khi xử lý random song
            shuffleBtn.onclick = () => {
                if(_this.isRepeat){
                    _this.isRepeat = !_this.isRepeat
                    repeatBtn.classList.remove('btn-active',_this.isRepeat)
                }
                _this.isRandom = !_this.isRandom
                shuffleBtn.classList.toggle('btn-active',_this.isRandom)
                // _this.setConfig('isRandom', _this.isRandom)
            }

            //Khi xử lý random song
            repeatBtn.onclick = () => {
                if(_this.isRandom){
                    _this.isRandom = !_this.isRandom
                    shuffleBtn.classList.remove('btn-active',_this.isRandom)
                }
                _this.isRepeat = !_this.isRepeat
                repeatBtn.classList.toggle('btn-active',_this.isRepeat)
                // _this.setConfig('isRepeat', _this.isRepeat)
            }

            //Xử lý next song khi audio ended
            audio.onended = () => {
                if(this.isRepeat){
                    audio.play()
                } else {
                    nextBtn.click()
                }
            }

            //Lắng nghe hành vi doubleclick vào playlist
            musicList.ondblclick = (e) => {
                const songNodes = e.target.closest('.music-list-item:not(.music-list-item-active)')
                if(songNodes){
                    _this.currentIndex = Number(songNodes.dataset.index)
                    _this.loadCurrentSong()
                    audio.play()
                    _this.render()
                }
            }

            //Lắng nghe hành vi click vào playlist
            musicList.onclick = (e) => {
                const songNodeImages = e.target.closest('.music-list-item-song-active')
                const songAuthor = e.target.closest('.music-list-item-song-product-link-author')
                const songNodes = e.target.closest('.music-list-item:not(.music-list-item-active)')
                if(songNodeImages || songAuthor || songNodes){
                    if(songNodeImages){
                        _this.currentIndex = Number(songNodeImages.dataset.index)
                        _this.loadCurrentSong()
                        audio.play()
                        _this.render()
                    }
                    else if(songNodes){
                        const bodyWidth = $('body').offsetWidth
                        if(bodyWidth <= 450){
                            _this.currentIndex = Number(songNodes.dataset.index)
                            _this.loadCurrentSong()
                            audio.play()
                            _this.render()
                        }
                    }
                    else{
                        confirm('Tôi chưa tạo web này')
                    }
                }
            }
        },
        nextSong() {
            this.currentIndex++
            if(this.currentIndex > this.songs.length-1){
                this.currentIndex = 0
            }

            this.loadCurrentSong()
        },
        prevSong() {
            this.currentIndex--
            if(this.currentIndex < 0){
                this.currentIndex = this.songs.length - 1
            }

            this.loadCurrentSong()
        },
        playRandomSong() {
            let newIdex
            do{
                newIdex = Math.floor(Math.random() * this.songs.length)
            }while(newIdex === this.currentIndex)
            
            this.currentIndex = newIdex
            this.loadCurrentSong()
        },
        loadCurrentSong() {
            
            imageSongPlaying.setAttribute('src', `.${this.currentSong.imageSong}`)
            nameSongPlaying.innerText = `${this.currentSong.name}`
            authorSongPlaying.innerText = `${this.currentSong.singer}`
            audio.setAttribute('src', `${this.currentSong.path}`)
            durationSong.innerText = `${this.currentSong.duration}`
            textSong.innerText = `${this.currentSong.textSong}`
            textSongPhone.innerText = `${this.currentSong.textSong}`
        },
        start() {
            //Định nghĩa các thuộc tính cho object
            this.difineProperties()

            //Lắng nghe các sự kiện
            this.handleEvent()

            //Tải thông tin bài hát đầu tiên vào UI khi chạy ứng dụng
            this.loadCurrentSong()

            //render musiclist
            this.render()
            
            console.log(
                "%cLOVE YOU",
                "color:red;font-family:system-ui;font-size:4rem;-webkit-text-stroke: 1px black;font-weight:bold"
              );

        }
    }
    app.start()
}
