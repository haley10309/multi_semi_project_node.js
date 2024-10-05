const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/api/movies", (req, res) => {
  res.send([
    {
      number: 1,
      movie_name: "웡카",
      star: "4.5",
      story:
        "화려한 업적을 이루기 전의 어린 시절, 모험을 떠난 윌리 웡카가 움파룸파 가족을 만나게 된 이야기가 펼쳐진다.",
      director: "Paul King",
      img_url: "https://newsimg.sedaily.com/2024/02/15/2D5DBZTH0H_1.jpg",
    },
    {
      number: 2,
      movie_name: "시민덕희",
      star: "4.2",
      story:
        "화재 사건으로 세탁소를 잃은 싱글맘 덕희는 어느날 선불 대출을 제안하는 은행의 전화를 받게 된다. 은행의 제안에 돈을 송금한 덕희, 그러나 얼마 지나지 않아 자신이 보이스 피싱의 피해자가 되었다는 사실을 깨닫게 된다. 망연자실한 덕희는 경찰에게 도움을 요청하며 돌아서지만, 자신의 돈을 찾을 방법이 없다는 사실에 더욱 좌절하는데...",
      director: "박영주",
      img_url:
        "https://image.tmdb.org/t/p/w600_and_h900_bestv2/hu4nI6znjpdLqcq2SLfLRc3CJOQ.jpg",
    },
    {
      number: 3,
      movie_name: "듄2",
      star: "3.9",
      story:
        "한 소년이 스파이시를 보호하는 거대한 생명체를 가진 사막의 유목민들의 구원자가 된다. 그 스파이스는 사람들을 여행자, 신비주의자 혹은 미치광이로 만들어 버린다.",
      director: "Denis Villeneuve",
      img_url:
        "https://image.tmdb.org/t/p/original/wv22frLmCpXDRjKj4MWFwa4eTOK.jpg",
    },
    {
      number: 4,
      movie_name: "랜드 오브 배드",
      star: "3",
      story:
        "라스베이거스 공군 기지의 베테랑 드론 조종사 리퍼 는 델타포스 티어-원 부대의 CIA 요원 구출작전 지원임무를 맡게 된다. 슈가, 아벨 이 이끄는 티어-원 부대는 CIA 요원이 사라진 필리핀 남서부, 미스터리한 지형의 홀로 섬 정찰에 나서고, 이 위험천만한 작전을 위해 JTAC 신입요원 키니와 실전 경험이 많은 군인 비숍 까지 합류한다.",
      director: "윌리엄 유뱅크",
      img_url:
        "https://img.megabox.co.kr/SharedImg/2024/02/19/KdYopYfSwypsx6vJeG7V605K7PBxNu6D_420.jpg",
    },
    {
      number: 5,
      movie_name: "SPY x FAMILY",
      star: "3.4",
      director: "Denis Villeneuve",
      story: "얍얍",
      img_url:
        "https://img.megabox.co.kr/SharedImg/2024/02/23/OpnH8Ij41oqrmeV7kZ9EBnDs2F9H9Oye_420.jpg",
    },
    {
      number: 6,
      movie_name: "밥 말리 : 원 러브",
      star: "4.5",
      director: "레이날도 마커스 그린",
      story:
        "오랜 분열로 혼란스러운 시기에 빠진 자메이카 국민들을 위로하기 위해 스마일 자메이카 콘서트를 준비하던 ‘밥 말리’는 총격을 입고 영국으로 망명을 택한다. 런던에서 지내며 사랑과 평화, 공존의 메시지를 담은 ’엑소더스’ 앨범을 발매하고 전세계가 열광하는 아이콘이 된 ’밥 말리‘. 그는 생명의 위협에도 불구하고 다시 한번 자메이카 국민들 앞에서 평화를 노래하는 콘서트를 열기 위해 무대에 오르는데…",
      actors: "킹슬리 벤-어디어, 라샤냐 린치, 제임스 노턴 ",
      img_url:
        "https://img.megabox.co.kr/SharedImg/2024/02/21/a2XXISmO0pie7WCY1zIutiVndieMeZBW_420.jpg",
    },
    
    {
      number: 7,
      movie_name: "가여운 것들",
      star: "4.1",
      director: "요르고스 란티모스",
      story:
        "오랜 분열로 혼란스러운 시기에 빠진 자메이카 국민들을 위로하기 위해 스마일 자메이카 콘서트를 준비하던 ‘밥 말리’는 총격을 입고 영국으로 망명을 택한다. 런던에서 지내며 사랑과 평화, 공존의 메시지를 담은 ’엑소더스’ 앨범을 발매하고 전세계가 열광하는 아이콘이 된 ’밥 말리‘. 그는 생명의 위협에도 불구하고 다시 한번 자메이카 국민들 앞에서 평화를 노래하는 콘서트를 열기 위해 무대에 오르는데…",
      actors: "엠마 스톤, 마크 러팔로, 윌렘 데포 ",
      img_url:
        "https://img.megabox.co.kr/SharedImg/2024/03/08/2MQEG7CWIkZuekOIErgQU12isYQhKTbQ_420.jpg",
    },
  ]);
});
app.get("/movie", (req, res) => {
  const movieId = req.query.movie_id; // Extract the movie_id query parameter
  // Based on the movie_id, return the corresponding movie data
  switch (movieId) {
    case "1":
      res.send([
        {
          movie_id: 1,
          title: "웡카",
          averagerating: "4.5",
          description:
            "화려한 업적을 이루기 전의 어린 시절, 모험을 떠난 윌리 웡카가 움파룸파 가족을 만나게 된 이야기가 펼쳐진다.",
          director: "Paul King",
          actors: "티모시 샬라메, 휴 그랜트 ",
          img_url: "https://newsimg.sedaily.com/2024/02/15/2D5DBZTH0H_1.jpg",
        },
      ]);
      break;
    case "2":
      res.send([
        {
          movie_id: 2,
          title: "시민덕희",
          averagerating: "4.2",
          description:
            "화재 사건으로 세탁소를 잃은 싱글맘 덕희는 어느날 선불 대출을 제안하는 은행의 전화를 받게 된다. 은행의 제안에 돈을 송금한 덕희, 그러나 얼마 지나지 않아 자신이 보이스 피싱의 피해자가 되었다는 사실을 깨닫게 된다. 망연자실한 덕희는 경찰에게 도움을 요청하며 돌아서지만, 자신의 돈을 찾을 방법이 없다는 사실에 더욱 좌절하는데...",
          director: "박영주",
          actors: "라미란 공명 안은진",
          img_url:
            "https://image.tmdb.org/t/p/w600_and_h900_bestv2/hu4nI6znjpdLqcq2SLfLRc3CJOQ.jpg",
        },
      ]);
      break;
    case "3":
      res.send([
        {
          movie_id: 3,
          title: "듄2",
          averagerating: "3.9",
          director: "Denis Villeneuve",
          description:
            "한 소년이 스파이시를 보호하는 거대한 생명체를 가진 사막의 유목민들의 구원자가 된다. 그 스파이스는 사람들을 여행자, 신비주의자 혹은 미치광이로 만들어 버린다.",
          actors: "티모시 샬라메, 젠데이야 ",
          img_url:
            "https://image.tmdb.org/t/p/original/wv22frLmCpXDRjKj4MWFwa4eTOK.jpg",
        },
      ]);
      break;
    case "4":
      res.send([
        {
          movie_id: 4,
          title: "랜드 오브 배드",
          averagerating: "3",
          director: "윌리엄 유뱅크",
          description:
            "라스베이거스 공군 기지의 베테랑 드론 조종사 리퍼 는 델타포스 티어-원 부대의 CIA 요원 구출작전 지원임무를 맡게 된다. 슈가, 아벨 이 이끄는 티어-원 부대는 CIA 요원이 사라진 필리핀 남서부, 미스터리한 지형의 홀로 섬 정찰에 나서고, 이 위험천만한 작전을 위해 JTAC 신입요원 키니와 실전 경험이 많은 군인 비숍 까지 합류한다.",
          actors: " 러셀 크로우 , 리암 햄스워스",
          img_url:
            "https://img.megabox.co.kr/SharedImg/2024/02/19/KdYopYfSwypsx6vJeG7V605K7PBxNu6D_420.jpg",
        },
      ]);
      break;
    case "5":
      res.send([
        {
          movie_id: 5,
          title: "SPY x FAMILY",
          averagerating: "3.4",
          director: "카타가리 타카시",
          description:
            "서로의 정체를 숨긴 채 결성된 위장 가족의 아버지 로이드(스파이)와 어머니 요르(암살자), 딸 아냐(초능력자)는 각자의 목표를 위해 비밀스러운 임무를 수행한다. 오퍼레이션 <올빼미> 작전을 위해 첫 가족 여행을 떠나던 중, 아냐는 열차 안에서 수상한 캐리어를 발견하고 그 안의 초콜릿을 실수로 그만 삼켜버리고 마는데…",
          actors:
            "에구치 타쿠야, 타네자키 아츠미, 하야미 사오리, 마츠다 켄이치로 ",
          img_url:
            "https://img.megabox.co.kr/SharedImg/2024/02/23/OpnH8Ij41oqrmeV7kZ9EBnDs2F9H9Oye_420.jpg",
        },
      ]);
      break;
    case "6":
      res.send([
        {
          movie_id: 6,
          title: "밥 말리 : 원 러브",
          averagerating: "3.4",
          director: "카타가리 타카시",
          description:
            "서로의 정체를 숨긴 채 결성된 위장 가족의 아버지 로이드(스파이)와 어머니 요르(암살자), 딸 아냐(초능력자)는 각자의 목표를 위해 비밀스러운 임무를 수행한다. 오퍼레이션 <올빼미> 작전을 위해 첫 가족 여행을 떠나던 중, 아냐는 열차 안에서 수상한 캐리어를 발견하고 그 안의 초콜릿을 실수로 그만 삼켜버리고 마는데…",
          actors: " ",
          img_url:
            "https://img.megabox.co.kr/SharedImg/2024/02/23/OpnH8Ij41oqrmeV7kZ9EBnDs2F9H9Oye_420.jpg",
        },
      ]);
      break;
    case "7":
      res.send([
        {
          movie_id: 7,
          title: "가여운 것들",
          averagerating: "4.1",
          director: "요르고스 란티모스",
          description:
            "천재적이지만 특이한 과학자 갓윈 백스터(윌렘 대포)에 의해 새롭게 되살아난 벨라 백스터(엠마 스톤). 갓윈의 보호를 받으며 성장하던 벨라는 날이 갈수록 세상에 대한 호기심과 새로운 경험에 대한 갈망이 넘쳐난다. 아름다운 벨라에게 반한 짓궂고 불손한 바람둥이 변호사 덩컨 웨더번(마크 러팔로)이 더 넓은 세계를 탐험하자는 제안을 하자, 벨라는 새로운 경험에 대한 갈망으로 대륙을 횡단하는 여행을 떠나고 처음 보는 광경과 새롭게 만난 사람들을 통해 놀라운 변화를 겪게 되는데…",
          actors: " 엠마 스톤, 마크 러팔로, 윌렘 데포",
          img_url:
            "https://img.megabox.co.kr/SharedImg/2024/03/08/2MQEG7CWIkZuekOIErgQU12isYQhKTbQ_420.jpg",
        },
      ]);
      break;
    default:
      res.status(404).send("Movie not found");
  }
});

app.get(`/review`, (req, res) => {
  res.send([
    {
      user_id: "haley",
      movie_id: "웡카",
      review_id: 1,
      content: "너무 재밌네요",
      post_date: "2024-05-17 10:20:30",
      likes: 3,
      rating: 5,
    },
    {
      user_id: "miley",
      movie_id: "웡카",
      review_id: 2,
      content: "조니뎁 버전이 더 나은듯..",
      post_date: "2024-02-21 10:20:30",
      likes: 3,
      rating: 3,
    },
  ]);
});

app.listen(port, () => console.log(`Listening on port ${port}`));
