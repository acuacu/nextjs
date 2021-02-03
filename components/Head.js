import Head from 'next/head'
export default class HeadBody extends React.Component {
    render() {
        console.log()
        return (
            <Head>
                <title>
                    {this.props.title}
                </title>
                <meta charset={this.props.charset} />
                {/* Carousel react-slick */}
                <link rel="stylesheet" type="text/css" charset="UTF-8" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" />
                <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css" />
                {/* Autor del app */}
                <meta name="autor" content={this.props.autor} />
                {/* descripcion respetar 150 caracteres */}
                <meta name="description" content={this.props.description} />
                {/* palabras clabe */}
                <meta name="keywords" content={this.props.keywords} />
                {/* Fonts family */}
                <link href="https://fonts.googleapis.com/css2?family=Dosis:wght@800&display=swap" rel="stylesheet" />
                {/* Required meta tags */}
                <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
                {/* Bootstrap CSS */}
                <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css" integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk" crossorigin="anonymous" />
                {/* Fontastic */}
                <link href="https://file.myfontastic.com/QGo7mPeY9LbyDYgsD33fXU/icons.css" rel="stylesheet" />
                <link rel="preconnect" href="https://fonts.gstatic.com" />
            </Head>

        )
    }
}