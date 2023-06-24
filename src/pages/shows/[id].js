import { useRouter } from 'next/router'
import { ShowContent }from '../../components/ShowContent';

function Page(props) {
  return <ShowContent showContent={props.data}/>;
}

  // This gets called on every request
  export async function getServerSideProps(context) {
    // Fetch data from external API
    const res = await fetch(`https://api.tvmaze.com/shows/${context.params.id}`)
    const data = await res.json()
   
    // Pass data to the page via props
    return { props: { data } }
  }

  export default Page;