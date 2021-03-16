function landing(e){
    e.preventDefault();
    document.getElementById('landingPg').classList.remove('hidden');
    document.getElementById('aboutPg').classList.add('hidden');
    document.getElementById('workPg').classList.add('hidden');
    document.getElementById('contactPg').classList.add('hidden');
}


function about(e){
    e.preventDefault();
    document.getElementById('aboutPg').classList.remove('hidden');
    document.getElementById('landingPg').classList.add('hidden');
    document.getElementById('workPg').classList.add('hidden');
    document.getElementById('contactPg').classList.add('hidden');
}

function work(e){
    e.preventDefault();
    document.getElementById('workPg').classList.remove('hidden');
    document.getElementById('aboutPg').classList.add('hidden');
    document.getElementById('landingPg').classList.add('hidden');
    document.getElementById('contactPg').classList.add('hidden');
}

function contact(e){
    e.preventDefault();
    document.getElementById('contactPg').classList.remove('hidden');
    document.getElementById('aboutPg').classList.add('hidden');
    document.getElementById('landingPg').classList.add('hidden');
    document.getElementById('workPg').classList.add('hidden');
}