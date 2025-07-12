


import styles from './page.module.css';
import ResumeForm from '@/components/ResumeForm1';


export default function Home() {


  return (
    <div className={styles.page}>
      <h1>Resume Builder</h1>
      <ResumeForm/>

    </div>
  );
}
