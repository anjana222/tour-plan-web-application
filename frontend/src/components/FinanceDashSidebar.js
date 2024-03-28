import { Link } from 'react-router-dom';
import '../styles/anjana/FinanceDashSidebar.css';

function FinanceDashSidebar() {
  return (
    <div className='FinanceDashSidebarMainCont' data-testid="financedashsidebar">
      <div className='FinanceDSLogoCont'>
        <center>
          <img src={'https://i.ibb.co/rv3cmhq/Logo.png'} alt='logo' />
        </center>
      </div>
      {/* <hr className='Ceohrline' /> */}
      <Link className='FinanceSTabContS' to={`/financeDashboard`}>
        <span className="material-symbols-outlined">dashboard</span><p>Dashboard</p>
      </Link>
      
      <p className='FinanceSTabContSub'>
        
        <Link className='FinanceSTabContS' to={`/financeDashboard/pending/hotel`}>
          <span className="material-symbols-outlined">hotel</span><p>Hotels</p>
        </Link>
        {/* <Link className='FinanceSTabContS' to={`/financeDashboard/pending/destination`}>
          <span className="material-symbols-outlined">pin_drop</span><p>Destinations</p>
        </Link> */}
        <Link className='FinanceSTabContS' to={`/financeDashboard/pending/guide`}>
          <span className="material-symbols-outlined">person</span><p>Guide</p>
        </Link>
        <Link className='FinanceSTabContS' to={`/financeDashboard/pending/package`}>
          <span className="material-symbols-outlined">package</span><p>Packages</p>
        </Link>
      </p>
      {/* <Link className='FinanceSTabContS' to={`/financeDashboard/financeRevenue`}>
        <span className="material-symbols-outlined">monitoring</span><p>Revenue</p>
      </Link>
      <Link className='FinanceSTabContS' to={`/financeDashboard/invoice`}>
        <span className="material-symbols-outlined">receipt_long</span><p>Invoices</p>
      </Link> */}
    </div>
  )
}

export default FinanceDashSidebar