import Head from 'next/head'
export default class HeadBody extends React.Component{
    render(){
        console.log()
        return(
                <Head>
                    <title>
                        {this.props.title}
                    </title>
                  
                    <meta charset="utf-8" />
                    <link rel="stylesheet" type="text/css" charset="UTF-8" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" /> 
                    <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css" />
                    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" /> 
                    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css" integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk" crossorigin="anonymous" />
                    <link href="https://file.myfontastic.com/QGo7mPeY9LbyDYgsD33fXU/icons.css" rel="stylesheet" />
                </Head>
        ) 
    }
}