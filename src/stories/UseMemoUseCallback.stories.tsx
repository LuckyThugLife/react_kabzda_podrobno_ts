import React, {useCallback, useMemo, useState} from "react";

export default {
    title: "UseMemoUseCallback"
}

export const DifficultCountingExample = () => {

    const [a, setA] = useState<number>(5)
    const [b, setB] = useState<number>(5)

    let resultA = 1
    let resultB = 1


    resultA = useMemo(() => {
        let tempResultA = 1
        for (let i = 1; i <= a; i++) {
            let fake = 0
            while (fake < 100000000) {
                fake++
                const fakeValue = Math.random()
            }
            tempResultA = tempResultA * i
        }
        return tempResultA
    }, [a])

    for (let i = 1; i <= b; i++) {
        resultB = resultB * i
    }

    return <>
        <input value={a} onChange={(e) => setA(Number(e.currentTarget.value))}/>
        <input value={b} onChange={(e) => setB(+e.currentTarget.value)}/>

        <hr/>

        <div>
            Result for a: {resultA}
        </div>
        <div>
            Result for b: {resultB}
        </div>

    </>
}


export const UsersSecret = (props: { users: Array<string> }) => {
    console.log("Users secret")
    return <div>{
        props.users.map((u, i) => <div key={i}>{u}</div>)
    }</div>
}
const Users = React.memo(UsersSecret)


export const HelpsToReactMemo = () => {
    console.log("HelpsToReactMemo")
    const [counter, setCounter] = useState(0)
    const [users, setUsers] = useState(["Rustam", "Fira", "Adam", "Aya"])

    const newArray = useMemo(() => {
        return users.filter(u => u.toLowerCase().indexOf("m") > -1)
    }, [users])

    const addUser = () => {
        const newUser = [...users, "Maruf " + new Date().getTime()]
        setUsers(newUser)
    }

    return <>
        <button onClick={() => setCounter(counter + 1)}>+</button>
        <button onClick={() => addUser()}>add user</button>
        {counter}
        <Users users={newArray}/>
    </>
}

export const LikeUseCallback = () => {
    console.log("LikeUseCallback")
    const [counter, setCounter] = useState(0)
    const [books, setBooks] = useState(["React", "JS", "CSS", "HTML"])

    const newArray = useMemo(() => {
        return books.filter(book => book.toLowerCase().indexOf("m") > -1)
    }, [books])


    const memoizedAddBook = useMemo(() => {
        return () => {
            console.log(books)
            const newBook = [...books, "Angular " + new Date().getTime()]
            setBooks(newBook)
        }
    }, [books])

    const memoizedAddBook2 = useCallback(() => {
            console.log(books)
            const newBook = [...books, "Angular " + new Date().getTime()]
            setBooks(newBook)
    }, [books])


    return <>
        <button onClick={() => setCounter(counter + 1)}>+</button>
        {counter}
        <Book books={newArray} addBook={memoizedAddBook2}/>
    </>
}

type BookSecretPropsType = {
    books: Array<string>
    addBook: () => void
}

export const BooksSecret = (props: BookSecretPropsType) => {
    console.log("Books secret")
    return <div>
        <button onClick={() => props.addBook()}>add book</button>
        {
            props.books.map((book, i) => <div key={i}>{book}</div>)
        }</div>
}
const Book = React.memo(BooksSecret)
