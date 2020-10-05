import Head from 'next/head'
export default class HeadBody extends React.Component{
    render(){
        console.log()
        return(
                <Head>
                    <title>
                        {this.props.title}
                    </title>
                    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css" integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk" crossorigin="anonymous" />
                    <link href="https://file.myfontastic.com/QGo7mPeY9LbyDYgsD33fXU/icons.css" rel="stylesheet" />
                </Head>
        ) 
    }
}