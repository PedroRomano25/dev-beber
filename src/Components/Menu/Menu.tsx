import React from "react";
import { Link } from "react-router-dom";
import { MenuProps } from "../../Types/allTypes";
import "./Menu.module.scss";
  



const Menu: React.FC<MenuProps> = (props) => {
  return (
    <>
      <nav>
        <ul>
            {
                props.value.map( (i,index) => {
                    return(
                        <Link key={index} to={i.link}><li>{i.nome}</li></Link>

                    )
                })
            }
              
        </ul>
      </nav>
    </>
  );
};

export default Menu;
