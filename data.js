const dataSet = {};
const dataSetKey = '2026-05-17';
let dataSetVersion = '2026-05-17';
const imageRoot = '';

dataSet[dataSetKey] = {};

// [옵션 설정] : 필터링 기능 (원하지 않으면 비워두셔도 됩니다)
const options = [
  {
    name: 'Filter by Series',
    key: 'series',
    tooltip: 'Check to include.',
    checked: true,
    sub: [
      { name: '타이틀곡', key: 'title', checked: true },
      { name: '수록곡', key: 'b-side', checked: true }
    ]
  }
];

// ★ [노래 목록 넣는 곳] ★
// 여기에 원하는 플레이브 노래를 번호순(1, 2, 3...)으로 쭉 늘려가시면 됩니다!
// 이미지를 안 쓸 거라 img 항목은 전부 빈칸('')으로 비워두었습니다.

dataSet[dataSetKey][1] = { name: "기다릴게", img: "", opts: { series: ["title"] } };
dataSet[dataSetKey][2] = { name: "여섯 번째 여름", img: "", opts: { series: ["title"] } };
dataSet[dataSetKey][3] = { name: "WAY 4 LUV", img: "", opts: { series: ["title"] } };
dataSet[dataSetKey][4] = { name: "Pump Up The Volume", img: "", opts: { series: ["title"] } };
dataSet[dataSetKey][5] = { name: "픽셀월드 (Pixel World)", img: "", opts: { series: ["b-side"] } };
dataSet[dataSetKey][6] = { name: "W4L (Our Movie)", img: "", opts: { series: ["b-side"] } };
dataSet[dataSetKey][7] = { name: "From", img: "", opts: { series: ["b-side"] } };
