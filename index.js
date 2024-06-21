function aumentaBotao(){
  var btnNao = document.querySelector('.btn-nao');
  var btnSim = document.querySelector('.btn-sim');

  btnNao.addEventListener('click', function() {
    var rect = btnSim.getBoundingClientRect();
    var currentWidth = rect.width;
    var currentHeight = rect.height;
    
    // Aumenta o tamanho em 10%
    var newWidth = currentWidth * 1.1;
    var newHeight = currentHeight * 1.1;
    
    btnSim.style.width = newWidth + 'px';
    btnSim.style.height = newHeight + 'px';
  });
}

function diminuiBotao(){
  var btnNao = document.querySelector('.btn-nao');
  var btnSim = document.querySelector('.btn-sim');

  btnNao.addEventListener('click', function() {
    var rect = btnNao.getBoundingClientRect();
    var currentWidth = rect.width;
    var currentHeight = rect.height;
    
    // Aumenta o tamanho em 10%
    var newWidth = currentWidth / 1.1;
    var newHeight = currentHeight / 1.1;
    
    btnNao.style.width = newWidth + 'px';
    btnNao.style.height = newHeight + 'px';
  });
}


aumentaBotao();
diminuiBotao();