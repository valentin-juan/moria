import './SideBar.css'

export function SideBar(){
    return(
        <div id="sideBar">
            <ul className="listNav">
                <li className="dashboard">
                    <a href='/dashboard'>Dashboard</a>
                </li>
                <li className="customers">
                    <a href='/customers'>Clientes</a>
                </li>
                <li className="products">
                    <a href='/products'>Produtos</a>
                </li>
                <li className="sales">
                    <a href='/sales'>Vendas</a>
                </li>
            </ul>
        </div>
    )
}