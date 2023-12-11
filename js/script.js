let newItem = document.querySelectorAll(".carousel-item");
        function addActive(item){
            item.classList.add("active");
        }

        function removeActive(item){
            item.classList.remove("active");
        }

        addActive(newItem[0]);
        setInterval(function() {
            for(let i = 0; i < newItem.length; i++){
                if(i + 1 == newItem.length){
                    addActive(newItem[0]);
                    setTimeout(removeActive, 350, newItem[i]);
                    break;
                }
                if(newItem[i].classList.contains("active")){
                    setTimeout(removeActive, 350, newItem[i]);
                    addActive(newItem[i + 1]);
                    break;
                }
            }
        }, 1500);