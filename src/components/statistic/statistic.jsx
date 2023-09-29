import css from '../statistic/statistic.module.css'
export const Statistic = ({ title, stats }) => {
  return <section className={css.statistic}>
    <h2 className={css.title}>{title}</h2>
<ul className={css.statList}>
     
      {stats.map(({label,percentage,id})=>{
        return  <li key={id} className={css.item}>
        <span className={css.lable}>{label}</span>
        <span className={css.percentage}>{percentage}%</span>
      </li>
      }
    )}
     
    </ul>
  </section>
}