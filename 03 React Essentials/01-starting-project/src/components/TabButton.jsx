export default function TabButton({children}){
    return (
        // children property is used to output what's inside the TabButton element
        <li><button>{children}</button></li>
    );
}