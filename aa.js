// استهداف النموذج
const form = document.querySelector('form');

// استهداف الحقل الذي يحتوي على التعليق
const commentField = form.querySelector('textarea');

// استهداف العنصر الذي يعرض القائمة الغير مرتبة للتعليقات
const commentList = document.getElementById('comment-list');

// إضافة حدث الإرسال للنموذج
form.addEventListener('submit', (event) => {
    event.preventDefault(); // منع الإرسال التلقائي للنموذج

    // جلب قيمة التعليق من حقل النص
    const comment = commentField.value.trim();

    // تأكد من أن الحقل ليس فارغًا
    if (comment !== '') {
        // إنشاء عنصر التعليق
        const commentItem = document.createElement('div');
        commentItem.classList.add('comment');
        commentItem.innerHTML = '<strong>' + form.name.value + ': </strong>' + comment;

        // إضافة عنصر التعليق إلى القائمة الغير مرتبة
        commentList.appendChild(commentItem);

        // مسح حقل التعليق
        commentField.value = '';
    }
});

var subjects = {
    "math": {
        "name": "الرياضيات",
        "credit_hours": 3,
        "final_grade": 80
    },
    "science": {
        "name": "العلوم",
        "credit_hours": 4,
        "final_grade": 90
    },
    "english": {
        "name": "اللغة الإنجليزية",
        "credit_hours": 2,
        "final_grade": 75
    }
};

var subjectsDiv = document.getElementById("subjects");

for (var subject in subjects) {
    var details = subjects[subject];

    var nameLabel = document.createElement("label");
    nameLabel.innerHTML = details.name + ":";

    var creditHoursInput = document.createElement("input");
    creditHoursInput.setAttribute("type", "number");
    creditHoursInput.setAttribute("name", "subjects[" + subject + "][credit_hours]");
    creditHoursInput.setAttribute("placeholder", "عدد الساعات الائتمانية");

    var finalGradeInput = document.createElement("input");
    finalGradeInput.setAttribute("type", "number");
    finalGradeInput.setAttribute("name", "subjects[" + subject + "][final_grade]");
    finalGradeInput.setAttribute("placeholder", "العلامة النهائية");

    subjectsDiv.appendChild(nameLabel);
    subjectsDiv.appendChild(creditHoursInput);
    subjectsDiv.appendChild(finalGradeInput);
}

function calculateGPA() {
    var totalCreditHours = 0;
    var totalGradePoints = 0;

    for (var subject in subjects) {
        var details = subjects[subject];
        var creditHours = parseInt(document.querySelector("input[name='subjects[" + subject + "][credit_hours]']").value);
        var finalGrade = parseInt(document.querySelector("input[name='subjects[" + subject + "][final_grade]']").value);

        totalCreditHours += creditHours;
        totalGradePoints += creditHours * finalGrade;
    }

    var gpa = totalGradePoints / totalCreditHours;
    document.getElementById("gpa").innerHTML = gpa.toFixed(2);
}