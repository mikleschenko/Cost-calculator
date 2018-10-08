let total= 5000, //"Общая стоимость"
    time=1,          //кол-во часов
    hourRate,        //стоим. работы в зависим. от кол-ва часов
    // получение доступа ко всем кликам и инпутам:
    tabLeft = document.querySelector('.tab-left'), // выберет ПЕРВЫЙ элем. с классом tab-left
    tabRight = document.querySelector('.tab-right'),
    blocksBlock = document.getElementById('blocks-block'),
    pagesBlock = document.getElementById('pages-block'),
    counterBlock = document.getElementById('counter-block'),
    counterPages = document.getElementById('counter-pages'),
    counterHours = document.getElementById('counter-hours'),
    counterRate = document.getElementById('counter-rate'),
    changesCheck = document.getElementById('changes-check'),
    cmsCheck = document.getElementById('cms-check'),
    totalValue = document.getElementsByClassName('total-count')[0], // выберет ВСЕ элем. с классом total-count, а [0] выбрет только первый 
    input = document.getElementsByTagName('input'); // выберет все теги input
    

const land = 5000,      //стоим. лендинга
      corp = 12000,     //стоим. многостраничника
      cms = 3000,       // установка на cms
      changes = 500, 
      blocks=500,     //стоим. 1 блока
      pages=2500;       //стоим. 1 страниці
 
window.addEventListener('DOMContentLoaded', function(){

        tabLeft.addEventListener('click', ()=>{   // при клике на табЛефт... очищаются все инпуты
            for(let i=0; i<input.length; i++){    //  ...очищаются все инпуты
                input[i].value = '';
            }

            blocksBlock.style.display = 'flex';         // ... и виден блок "Кол-во страниц"
            pagesBlock.style.display = 'none';          // ... а блок "Кол-во блоков" скрыт
            // .style.display - доступ до стилей css и именно до display (='none' это установить значение...)                                  

            tabLeft.classList.add('active');         // .classList - работа с классами, add добавить...
            tabRight.classList.remove('active');     //  ...remote удалить   

            if(changesCheck.checked){           //
                changesCheck.checked = false;   
            }
            if(cmsCheck.checked){               //
                cmsCheck.checked = false;
            }

            total = land;    //
            totalValue.value = total; //
        });

        tabRight.addEventListener('click', ()=>{   // при клике на табЛефт... очищаются все инпуты
            for(let i=0; i<input.length; i++){    //  ...очищаются все инпуты
                input[i].value = '';
            }

            blocksBlock.style.display = 'none';         // ... и виден блок "Кол-во блоков"
            pagesBlock.style.display = 'flex';          // ... а блок "Кол-во страниц" скрыт
            // .style.display - доступ до стилей css и именно до display (='none' это установить значение...)                                  

            tabRight.classList.add('active');   // .classList - работа с классами, add добавить...
            tabLeft.classList.remove('active');     //  ...remove удалить   

            if(changesCheck.checked){           // ... убитаются "галочки"
                changesCheck.checked = false;   
            }
            if(cmsCheck.checked){               //
                cmsCheck.checked = false;
            }

            total = corp;    //
            totalValue.value = total; //
        });

        counterBlock.addEventListener('change', ()=>{  // при вводе в инпут1 кол-ва блоков...
            counterHours.value = '';                    //- очистка инпутов 2 и 3
            counterRate.value = '';
            total = counterBlock.value * blocks;        //подсчет стоимости и...
            totalValue.value = total;                   // ...и передача её в Общую стоимость

        });

        counterPages.addEventListener('change', ()=>{  // при вводе в инпут1 кол-ва блоков...
            counterHours.value = '';                    //- очистка инпутов 2 и 3
            counterRate.value = '';
            total = counterPages.value * pages;        //подсчет стоимости и...
            totalValue.value = total;                   // ...и передача её в Общую стоимость

        });

        counterHours.addEventListener('change', ()=>{
            counterBlock.value = '';
            counterPages.value = '';
            total = 0;
            time = counterHours.value;
            hourRate = counterRate.value * time;
            totalValue.value = hourRate;
            total = hourRate;                  //запис. в тотал, чтобы не потерять р-т вычислений
        });

        counterRate.addEventListener('change', ()=>{
            counterBlock.value = '';
            counterPages.value = '';
            total = 0;
            hourRate = counterRate.value * time;
            totalValue.value = hourRate;
            total = hourRate;                  //запис. в тотал, чтобы не потерять р-т вычислений
        });

        changesCheck.addEventListener('change', ()=>{     // если поставить 1-ю галочку...
            if(changesCheck.checked){           
                total += changes;                         //...то к тоталу прибавить сумму в changes  
                totalValue.value = total;   
            } else {
                total -= changes;
                totalValue.value = total;
            }
        });

        cmsCheck.addEventListener('change', ()=>{     // если поставить 2-ю галочку...
            if(cmsCheck.checked){           
                total += cms;                         //...то к тоталу прибавить сумму в changes  
                totalValue.value = total;   
            } else {
                total -= cms;
                totalValue.value = total;
            }
        });
});     