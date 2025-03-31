import data from './../data/data';
import Entry from './Entry';

export default function Main({ searchState }) {
    //filter func
    const filteredData = data.filter(({ title }) => title.toLowerCase().includes(searchState?.toLowerCase()));
    //map func

    const entryElements = filteredData.map((entry) => {
        return (
            <Entry
                key={entry.id}
                {...entry}
            />
        )
    })

    return (
        <main className='container'>
            {entryElements}
        </main>
    )
}