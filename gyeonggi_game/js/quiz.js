const questions = [
    // 의회운영위원회 (3개)
    { committee: "의회운영위원회", text: "모임에서 진행을 맡고, 규칙을 정하는 일을 한다." },
    { committee: "의회운영위원회", text: "조직의 규칙을 정하고 이를 개선하기 위해 노력한다." },
    { committee: "의회운영위원회", text: "타인과의 갈등을 중재하고 조정한다." },

    // 기획재정위원회 (3개)
    { committee: "기획재정위원회", text: "여행을 갈 때 세부 예산을 철저하게 계획한다." },
    { committee: "기획재정위원회", text: "계획을 세우고, 실행 방안을 세밀하게 검토하는 편이다." },
    { committee: "기획재정위원회", text: "한정된 자원을 효율적으로 분배하는 데 관심이 많다." },

    // 경제노동위원회 (3개)
    { committee: "경제노동위원회", text: "지역 상권 활성화 행사에 참여한다." },
    { committee: "경제노동위원회", text: "중소기업이나 자영업자 지원에 대해 고민한 적이 있다." },
    { committee: "경제노동위원회", text: "노동 환경과 근로자의 권익 향상에 관심이 많다." },

    // 안전행정위원회 (3개)
    { committee: "안전행정위원회", text: "위급한 상황에서 침착하게 대처하는 편이다." },
    { committee: "안전행정위원회", text: "재난 대비와 안전 관리에 관심이 많다." },
    { committee: "안전행정위원회", text: "사람들이 안전하게 생활할 수 있는 환경을 중요하게 생각한다." },

    // 문화체육관광위원회 (3개)
    { committee: "문화체육관광위원회", text: "지역 예술가를 지원하는 것에 관심이 많다." },
    { committee: "문화체육관광위원회", text: "문화 행사나 축제에 참여한다." },
    { committee: "문화체육관광위원회", text: "체육 시설 및 프로그램 이용에 관심이 많다." },

    // 농정해양위원회 (3개)
    { committee: "농정해양위원회", text: "지역 농산물 직거래 장터에 참여해본 경험이 있다." },
    { committee: "농정해양위원회", text: "바다와 해양 생태계 보호에 관심이 많다." },
    { committee: "농정해양위원회", text: "축산업 및 동물 복지 문제에 대해 고민해본 적이 있다." },

    // 보건복지위원회 (3개)
    { committee: "보건복지위원회", text: "복지시설에서 봉사활동을 한다." },
    { committee: "보건복지위원회", text: "취약계층을 지원하는 프로젝트에 참여한다." },
    { committee: "보건복지위원회", text: "주변의 건강과 복지 문제에 관심이 많다." },

    // 건설교통위원회 (3개)
    { committee: "건설교통위원회", text: "도로, 철도, 항만과 같은 대중교통 시스템에 관심이 많다." },
    { committee: "건설교통위원회", text: "도시 인프라 개발에 대해 자주 고민해본 적이 있다." },
    { committee: "건설교통위원회", text: "교통 체증 문제 해결에 대한 아이디어를 가지고 있다." },

    // 도시환경위원회 (3개)
    { committee: "도시환경위원회", text: "도시 미관과 친환경 공간 조성에 관심이 많다." },
    { committee: "도시환경위원회", text: "대기질과 수질 개선에 관심이 많다." },
    { committee: "도시환경위원회", text: "공공 주택 및 도시 개발에 관심이 많다." },

    // 미래과학협력위원회 (3개)
    { committee: "미래과학협력위원회", text: "AI 및 로봇 기술에 관심이 많다." },
    { committee: "미래과학협력위원회", text: "미래 산업 및 혁신 기술에 관심이 많다." },
    { committee: "미래과학협력위원회", text: "국제 협력과 기술 공유에 관심이 많다." },

    // 여성가족평생교육위원회 (3개)
    { committee: "여성가족평생교육위원회", text: "여성 권익 보호와 가족 복지에 관심이 많다." },
    { committee: "여성가족평생교육위원회", text: "평생학습과 교육 기회 확대에 대한 아이디어가 많다." },
    { committee: "여성가족평생교육위원회", text: "다문화 가족의 사회 적응과 지원에 관심이 있다." },

    // 교육기획위원회 (3개)
    { committee: "교육기획위원회", text: "교육 정책을 기획하고 실행하는 일에 관심이 많다." },
    { committee: "교육기획위원회", text: "교육의 질 향상과 학습 방식 개선을 고민해본 적이 있다." },
    { committee: "교육기획위원회", text: "교육과 연구를 연계하는 방식에 관심이 많다." },

    // 교육행정위원회 (3개)
    { committee: "교육행정위원회", text: "교직원 복지와 인사 관리 개선에 대한 아이디어가 있다." },
    { committee: "교육행정위원회", text: "학교 시설 개선과 안전 관리를 중요하게 생각한다." },
    { committee: "교육행정위원회", text: "학생들이 더 나은 환경에서 학습할 수 있는 방안을 고민해본 적이 있다." }
];

let currentQuestionIndex = 0;
let scores = {};
let tieBreakerMode = false;
let secondTieBreakerMode = false;
let tieBreakerCommittees = [];
let remainingQuestions = [];
let selectedQuestions = [];
const committees = [...new Set(questions.map(q => q.committee))];

// ✅ Fisher-Yates Shuffle (질문 랜덤 섞기)
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const randomIndex = Math.floor(Math.random() * (i + 1));
        [array[i], array[randomIndex]] = [array[randomIndex], array[i]];
    }
}

// ✅ 각 상임위원회에서 2문제 랜덤 선택 + 남은 1문제 저장
function selectTwoQuestionsPerCommittee() {
    let selected = [];
    remainingQuestions = [];

    committees.forEach(committee => {
        const committeeQuestions = questions.filter(q => q.committee === committee);
        shuffleArray(committeeQuestions);
        selected.push(...committeeQuestions.slice(0, 2)); 
        remainingQuestions.push(committeeQuestions[2]); 
    });

    shuffleArray(selected);
    shuffleArray(remainingQuestions); 
    return selected;
}

// ✅ 점수 초기화
function initializeScores() {
    scores = {};
    committees.forEach(committee => scores[committee] = 0);
}

// ✅ 게임 시작 시 질문 섞고 점수 초기화
document.addEventListener("DOMContentLoaded", () => {
    selectedQuestions = selectTwoQuestionsPerCommittee();
    initializeScores();
    currentQuestionIndex = 0;
    tieBreakerMode = false;
    secondTieBreakerMode = false;
    loadQuestion();
});

// ✅ 진행바 업데이트 (2단계 동점일 경우 숨김)
function updateProgressBar() {
    const progressBar = document.getElementById("progress-bar");
    const progressText = document.getElementById("progress-text");
    
    // ✅ 2단계 동점 시 진행바 숨김
    if (secondTieBreakerMode) {
        progressBar.style.display = "none";
        progressText.style.display = "none";
    } else {
        progressBar.style.display = "block";
        progressText.style.display = "block";
        const progressPercentage = ((currentQuestionIndex + 1) / selectedQuestions.length) * 100;
        progressBar.style.width = `${progressPercentage}%`;
        progressText.textContent = `${currentQuestionIndex + 1}/${selectedQuestions.length}`;
    }
}

// ✅ 질문 로딩 (1단계, 2단계 동점 로직 수정)
function loadQuestion() {
    const questionElement = document.getElementById("question-text");
    const buttonContainer = document.querySelector(".button-container");

    if (secondTieBreakerMode) {
        questionElement.textContent = `직접 상임위원회를 선택해주세요.🔄🎯`;
        buttonContainer.innerHTML = "";
        tieBreakerCommittees.forEach(committee => {
            const button = document.createElement("button");
            button.textContent = committee;  // ✅ 2단계 동점: 상임위원회 이름 그대로 유지
            button.classList.add("second-tie-btn");  // ✅ 두 번째 동점 버튼 전용 스타일 적용
            button.onclick = () => finishTieBreaker(committee);
            buttonContainer.appendChild(button);
        });
    } else {
        questionElement.textContent = selectedQuestions[currentQuestionIndex]?.text || "모든 질문이 끝났습니다!";
        buttonContainer.innerHTML = `
            <button class="answer-btn circle" onclick="selectAnswer(2, this)">매우 관심있음</button>
            <button class="answer-btn triangle" onclick="selectAnswer(1, this)">조금 관심있음</button>
            <button class="answer-btn square" onclick="selectAnswer(0, this)">관심없음</button>
        `;
    }
    updateProgressBar();
}


// ✅ 사용자가 답변을 선택할 때 (점수 즉시 반영)
function selectAnswer(score, button) {
    scores[selectedQuestions[currentQuestionIndex].committee] += score;
    highlightSelectedButton(button);

    setTimeout(() => {
        currentQuestionIndex++;
        if (currentQuestionIndex < selectedQuestions.length) {
            loadQuestion();
        } else {
            submitQuiz();
        }
    }, 500);
}

// 모달을 띄우는 함수
function showAlertModal(message) {
    const modal = document.getElementById('alertModal');
    const messageElement = document.getElementById('modalMessage');

    // 모달과 메시지 요소가 정상적으로 로드되었는지 확인
    if (modal && messageElement) {
        messageElement.textContent = message; // 메시지 설정
        console.log("모달 열기");
        modal.style.display = 'flex'; // 모달 열기
    } else {
        console.error("모달 또는 메시지 요소를 찾을 수 없습니다.");
    }
}

function closeAlertModal() {
    const modal = document.getElementById('alertModal');
    modal.style.display = 'none'; // 모달 닫기
}

// ✅ 동점 검사 및 처리 (1단계, 2단계 구분)
function submitQuiz() {
    // ✅ 1단계 동점 -> 남은 질문 출제
    const maxScore = Math.max(...Object.values(scores));
    tieBreakerCommittees = Object.keys(scores).filter(key => scores[key] === maxScore);

    if (tieBreakerCommittees.length > 1 && !tieBreakerMode) {
        showAlertModal("동점입니다! 추가 질문을 진행합니다.");  // 기존 alert -> 모달로 변경
        tieBreakerMode = true;
        selectedQuestions = remainingQuestions.filter(q => tieBreakerCommittees.includes(q.committee));
        shuffleArray(selectedQuestions);
        currentQuestionIndex = 0;
        loadQuestion();
    } 
    // ✅ 2단계 동점: 점수 재계산 후 다시 비교
    else if (tieBreakerCommittees.length > 1 && tieBreakerMode) {
        showAlertModal("아직 동점입니다! 직접 상임위원회를 선택해주세요.");  // 기존 alert -> 모달로 변경
        secondTieBreakerMode = true;
        loadQuestion();
    }
    // ✅ 최종 결과 결정
    else {
        window.location.href = `result.html?committee=${tieBreakerCommittees[0]}`;
    }
}

// ✅ 직접 선택
function finishTieBreaker(selectedCommittee) {
    showAlertModal(`${selectedCommittee}를 선택하셨습니다.`);  // 기존 alert -> 모달로 변경
    // 모달이 닫힌 후 결과 페이지로 이동
    setTimeout(function() {
        window.location.href = `result.html?committee=${selectedCommittee}`;
    }, 1000); // 1초 후 이동 (모달을 확인할 시간 제공)
}

// ✅ 버튼 강조 효과
function highlightSelectedButton(button) {
    resetButtonStyles();
    button.classList.add('selected');
}

// ✅ 버튼 초기화
function resetButtonStyles() {
    const buttons = document.querySelectorAll('.answer-btn');
    buttons.forEach(button => button.classList.remove('selected'));
}
