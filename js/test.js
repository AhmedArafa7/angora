arr = [ 'مَن كانَ يُؤْمِنُ باللَّهِ واليَومِ الآخِرِ فلا يُؤْذِ جارَهُ، ومَن كانَ يُؤْمِنُ باللَّهِ واليَومِ الآخِرِ فَلْيُكْرِمْ ضَيْفَهُ، ومَن كانَ يُؤْمِنُ باللَّهِ واليَومِ الآخِرِ فَلْيَقُلْ خَيْرًا أوْ لِيَصْمُتْ',
        'من كانتِ الآخرةُ هَمَّهُ جعلَ اللَّهُ غناهُ في قلبِهِ وجمعَ لَه شملَهُ وأتتهُ الدُّنيا وَهيَ راغمة، ومن كانتِ الدُّنيا همَّهُ جعلَ اللَّهُ فقرَهُ بينَ عينيهِ وفرَّقَ عليهِ شملَهُ، ولم يأتِهِ منَ الدُّنيا إلَّا ما قُدِّرَ لَهُ',
        'لو كانتِ الدُّنيا تعدلُ عندَ اللهِ جناحَ بعوضةٍ ما سقى كافرًا منها شربةَ ماءٍ',
        'واللَّهِ ما الدُّنْيا في الآخِرَةِ إلَّا مِثْلُ ما يَجْعَلُ أحَدُكُمْ إصْبَعَهُ هذِه، وأَشارَ يَحْيَى بالسَّبَّابَةِ، في اليَمِّ، فَلْيَنْظُرْ بمَ تَرْجِعُ؟',
        'لَا يُؤْمِنُ أحَدُكُمْ، حتَّى يُحِبَّ لأخِيهِ ما يُحِبُّ لِنَفْسِهِ',
        'لا يُؤْمِنُ أحدُكم حتى أكونَ أحبَّ إليه من ولدِهِ، ووالدِهِ، والناسِ أجمعينَ'
]
var len = arr.length - 1;




last = 1
function r(len){
        current = Math.floor(Math.random()*len);
        if (current == last){
                current ++
        }
        document.getElementById("hadith").innerText = arr[current];
        document.getElementsByClassName("hadith")
        last = current
        return current
}

r(len)





    
