import React from "react";

const SearchStatus = ({ length }) => {

    const getBageClasses=()=>{
        let classes = "badge "
        classes+=length===0?"bg-danger":"bg-primary"
        return classes
    }

    const renderPhrase = (number) => {
        if(number === 1){
          return `${number} человек тусанет с тобой сегодня`
        } else if(number>=1 && number<=4 ){
          return `${number} человека тусанут с тобой сегодня`
        } else if(number >= 5){
          return `${number} человек тусанут с тобой сегодня`
        } else if(number === 0){
          return `Никто не тусанет с тобой сегодня`
        }
      }

    return (
        <>
        <h1><span className={getBageClasses()}>{renderPhrase(length)}</span></h1>
        </>
    )
}

export default SearchStatus