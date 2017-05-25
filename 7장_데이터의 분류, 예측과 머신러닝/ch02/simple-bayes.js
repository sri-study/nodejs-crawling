var bayes = require('bayes');
var Mecab = require('./mecab-mod.js');
var mecab = new Mecab();

var t_jang = '장영실은 조선 전기의 관료이며 과학자, 기술자, 발명가다. 경상남도 동래군 출생. 본과은 아산. 시조 장서의 9대손으로 추정된다. 장영실은 동래현 관청에서 일하는 노비가 되었으며, 발명가인 장영실의 훌륭한 재주를 태종이 인정하여 발탁하였다...생략';
 
var t_lee = '이순신은 조선 중기의 무신이다. 본관은 덕수, 자는 여해, 지호는 충무이며, 한성 출신이다. 문반 가문 출신으로 1576년 무과에 급제하여 그 관직이 동구비보 권관, 훈련원 봉사, 발포진 수군만호, 조산보 만호, 전라좌도 수군절도사를 거쳐 정헌대부 삼도수군통제사에 이르렀다...생략';

var classifier = bayes({
	tokenizer : function(text) { 
		return mecab.parse(text);
	}
});

classifier.learn(t_jang, '장영실');
classifier.learn(t_lee, '이순신');

categorize('임진왜란의 장군으로 조선의 무신');
categorize('조선 최고의 과학자');
categorize('자격루를 만든 사람');

function categorize(text) {
	var r = classifier.categorize(text);
	console.log("카테고리 = ["+ r +"] - " +text);
}