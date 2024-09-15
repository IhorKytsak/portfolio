import { useState } from 'react'
import Head from 'next/head'
import Layout from '@/components/Layout'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import TransitionEffect from '@/components/TransitionEffect'

const TestHiddenPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const openModal = () => setIsModalOpen(true)
  const closeModal = () => setIsModalOpen(false)

  return (
    <>
      <Head>
        <title>Test Hidden Page</title>
        <meta name='description' content='for test purposes' />
      </Head>
      <TransitionEffect />
      <main className='flex w-full flex-col items-center justify-center dark:text-light'>
        <Layout className='pt-16'>
          <div onClick={openModal}>HIIIIIIIIIIIIIIIi</div>
          <button
            onClick={openModal}
            className='mt-4 px-4 py-2 bg-blue-500 text-black rounded'
          >
            Open Fullscreen Modal
          </button>
        </Layout>
      </main>

      {isModalOpen && (
        <div className='fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75'>
          <div className='relative bg-white w-full h-full'>
            <header className='flex justify-between items-center p-4 border-b h-[100px]'>
              <h2 className='text-xl font-semibold'>Modal Header</h2>
              <button onClick={closeModal} className='text-xl p-2 bg-slate-500'>
                &times;
              </button>
            </header>
            <Swiper
              slidesPerView={1}
              centeredSlides={true}
              autoHeight={true}
              loop={true}
              spaceBetween={'50px'}
              style={{
                width: '100vw',
                height: '100vh',
                maxHeight: '100vh',
              }}
            >
              <SwiperSlide
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  width: '100%',

                  // Center the slide horizontally
                }}
              >
                <div
                  style={{
                    maxWidth: '800px',
                    width: '100%',
                    margin: '0 auto',
                    height: '100%',
                    maxHeight: 'calc(100vh - 100px)',
                    overflowY: 'auto',
                    padding: '20px 32px',
                  }}
                >
                  Nam ut blandit orci. Aliquam erat volutpat. Duis vitae
                  sollicitudin arcu. Aliquam quis dictum erat, eu dapibus
                  lectus. Vestibulum libero lectus, aliquam eu tempus in, varius
                  vitae lacus. Phasellus pulvinar leo elit, ac ultricies purus
                  aliquam quis. Vivamus ut elementum tortor. Suspendisse
                  faucibus egestas nisl, in euismod metus condimentum a. Cras
                  sed lectus eu tellus suscipit congue. Donec in mi mi. Praesent
                  pellentesque augue turpis, eget rutrum justo consectetur vel.
                  Nullam at neque ex. Integer iaculis, nulla vel semper
                  interdum, tortor elit tempor turpis, non commodo ex ipsum non
                  dolor. In ut tortor quis erat ultricies rutrum non a sem.
                  Pellentesque fringilla sagittis vestibulum. Mauris dapibus
                  luctus lorem et tincidunt. Duis finibus tincidunt dolor ut
                  pulvinar. Integer elit purus, porttitor et tincidunt sed,
                  tempor ut felis. Nulla et metus at velit lobortis eleifend a
                  et purus. Vestibulum gravida tempus dolor, sed tempus urna
                  commodo sit amet. In nec leo vitae purus bibendum finibus.
                  Nunc rhoncus porta scelerisque. Aliquam egestas arcu sit amet
                  porttitor pellentesque. Nulla est erat, molestie et nibh sit
                  amet, dictum rutrum nibh. Pellentesque cursus pellentesque
                  odio, eget scelerisque lectus volutpat tempor. Sed tristique
                  tellus vel erat tincidunt molestie. Donec a metus vel ligula
                  convallis dapibus a nec lacus. Cras vitae aliquet nulla. Nulla
                  eleifend sapien eget lorem porta eleifend. Suspendisse
                  potenti. Lorem ipsum dolor sit amet, consectetur adipiscing
                  elit. Donec eu tincidunt orci. Pellentesque posuere, turpis
                  sed tristique euismod, lectus lorem facilisis mauris, in
                  consequat diam sapien sit amet ante. Suspendisse blandit
                  tempor pharetra. Maecenas euismod magna et aliquam finibus.
                  Etiam in metus in turpis molestie consequat. Aliquam mattis
                  venenatis lacus, eu commodo enim mollis vel. Aliquam pharetra
                  risus a porta laoreet. Morbi id ligula elementum, tempus nunc
                  quis, consectetur diam. Nulla eget orci id nibh varius tempus.
                  Nullam eget sem ipsum. Ut tellus felis, pretium id tempor
                  vitae, vulputate eget arcu. Etiam sollicitudin ex a felis
                  sagittis gravida. Fusce aliquet dapibus purus vitae
                  pellentesque. Aliquam quis viverra eros. Aliquam pulvinar eros
                  sed eros porta ultrices. Phasellus aliquet turpis non
                  efficitur egestas. Pellentesque quam nulla, maximus ut mauris
                  at, aliquam semper libero. Aenean blandit ex ac enim porta,
                  scelerisque suscipit purus lobortis. Donec aliquet consequat
                  lobortis. Interdum et malesuada fames ac ante ipsum primis in
                  faucibus. Sed quis leo sit amet est faucibus lacinia ac ac
                  arcu. Mauris feugiat porta sem eu vulputate. Nulla in libero
                  erat. Generated 5 paragraphs, 390 words, 2618 bytes of Lorem
                  Ipsum
                </div>
              </SwiperSlide>
              <SwiperSlide
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  width: '100%',

                  // Center the slide horizontally
                }}
              >
                <div
                  style={{
                    maxWidth: '800px',
                    width: '100%',
                    margin: '0 auto',
                    height: '100%',
                    maxHeight: 'calc(100vh - 100px)',
                    overflowY: 'auto',
                    padding: '20px 32px',
                  }}
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
                  rhoncus suscipit eros, id sollicitudin ipsum sollicitudin id.
                  Vivamus pharetra libero sit amet tincidunt sodales. Aliquam
                  erat volutpat. Morbi eros risus, malesuada sit amet eros at,
                  fermentum pellentesque ligula. Fusce rutrum, tortor at
                  pellentesque eleifend, nibh magna semper arcu, eget convallis
                  augue purus quis orci. Nulla facilisi. Sed posuere metus nisl,
                  in gravida eros finibus ultrices. Integer sed scelerisque
                  ligula, ut volutpat leo. Vivamus vel sagittis arcu. Integer
                  dolor mi, auctor nec ipsum id, commodo sodales nisl.
                  Suspendisse venenatis aliquam volutpat. Praesent pharetra
                  dignissim dui. Aliquam et enim lacus. Cras erat libero,
                  pharetra vel eleifend at, hendrerit ut lacus. Vivamus non
                  tortor id urna vestibulum lobortis. Vivamus at lacinia massa,
                  eget sollicitudin leo. Ut consectetur vehicula purus, et
                  tempus orci interdum sed. Suspendisse egestas consequat sapien
                  ac auctor. Quisque id semper dui. Proin gravida augue vel
                  mauris tincidunt, vel accumsan quam dapibus. In convallis
                  commodo elementum. Nullam gravida ullamcorper quam, sed rutrum
                  mi sollicitudin bibendum. Nunc feugiat enim ut eros ultrices,
                  et condimentum augue suscipit. Mauris efficitur pulvinar
                  pretium. Morbi vitae sagittis dui, id pellentesque libero.
                  Praesent fermentum, mauris sed finibus auctor, nisl ex
                  ullamcorper purus, non mattis orci tortor sollicitudin est.
                  Duis tempor ex leo, sit amet varius nisl hendrerit ut.
                  Maecenas non sodales turpis. Integer interdum urna ut diam
                  faucibus ultricies. Nulla vel sodales mauris. Vestibulum odio
                  risus, accumsan nec luctus vitae, lobortis id purus. Cras
                  rutrum mauris vitae mi eleifend, sit amet rutrum mi fermentum.
                  In sagittis purus tellus, quis egestas lorem feugiat nec.
                  Nulla sem lacus, congue sed ullamcorper quis, elementum sed
                  ligula. Quisque fringilla, purus sed viverra vehicula, felis
                  arcu tempus purus, eget varius turpis eros sit amet ante.
                  Nullam cursus velit et lectus semper ultrices. Nullam a
                  efficitur risus, vitae congue ex. Donec quam erat,
                  sollicitudin eu fermentum quis, consequat et quam. Quisque
                  mattis arcu a condimentum porttitor. Morbi in semper metus.
                  Sed condimentum ex elit, molestie finibus leo ullamcorper non.
                  Aliquam mollis convallis pretium. In ac lacus consectetur,
                  auctor nisi nec, pharetra dui. Suspendisse bibendum est non
                  tortor cursus tempor. Proin non ligula ipsum. Sed elementum,
                  lectus eget sodales rhoncus, nibh neque lobortis diam, a
                  scelerisque libero dui non velit. Sed rhoncus elit ante, quis
                  efficitur libero accumsan sed. Morbi quis mattis orci, vel
                  iaculis lorem. Integer consectetur massa id mattis congue.
                  Aenean et dolor eros. In dapibus accumsan libero, in venenatis
                  est gravida id. Vivamus sed sollicitudin est, sed venenatis
                  eros. Ut posuere semper erat, vitae aliquet purus. Donec ac
                  finibus lorem. Mauris finibus enim diam, quis malesuada sapien
                  tempor sed. Curabitur a neque justo. Duis fermentum metus
                  vitae enim ultrices consectetur. Fusce ut elit turpis. Nullam
                  et vehicula felis, sit amet sagittis sem. Sed sed ullamcorper
                  libero. Phasellus non metus non purus imperdiet aliquam.
                  Vestibulum ante ipsum primis in faucibus orci luctus et
                  ultrices posuere cubilia curae; Maecenas dapibus tristique
                  turpis, ut iaculis justo imperdiet ut. Donec vestibulum, odio
                  in dapibus dictum, elit nisl volutpat lectus, imperdiet
                  condimentum purus ligula at ligula. Etiam congue quam ex, et
                  imperdiet arcu gravida at. Maecenas ligula tellus, laoreet
                  quis bibendum et, eleifend in lorem. Duis et semper justo.
                  Curabitur tincidunt id nisl bibendum vehicula. Praesent
                  interdum interdum pellentesque. Sed sit amet velit nec turpis
                  interdum placerat vitae et odio. Cras hendrerit varius
                  gravida. Donec eget tristique sem, a semper dui. Nam lobortis
                  pellentesque diam at vestibulum. Sed tortor justo, cursus non
                  turpis sit amet, vehicula lacinia magna. Sed pellentesque nibh
                  in lacus semper, vehicula fermentum massa sollicitudin. Sed
                  dignissim ante eu tellus cursus luctus. Vivamus rhoncus magna
                  sit amet ex interdum, quis ultrices risus gravida. Aenean
                  pellentesque urna vel diam posuere, eu pretium sapien maximus.
                  Vestibulum vel blandit turpis, tincidunt dapibus dui. Quisque
                  mattis elit sollicitudin libero iaculis auctor. Donec
                  venenatis bibendum nisi, ac dignissim est condimentum quis.
                  Nullam consectetur tempus lorem sed sollicitudin. Quisque
                  fermentum, diam vel imperdiet fermentum, dolor felis ornare
                  mi, sed ultrices est odio eu lectus. Quisque ultrices, elit ac
                  efficitur ornare, felis nulla iaculis mauris, scelerisque
                  feugiat magna ligula et dui. Suspendisse tristique mattis mi
                  ut consequat. Nullam nec libero eget leo molestie aliquam. In
                  congue diam quis feugiat vestibulum. Pellentesque egestas
                  efficitur justo, a dictum turpis volutpat at. Etiam mollis
                  urna accumsan nulla euismod pellentesque. Quisque massa nunc,
                  pulvinar vitae purus id, rhoncus tempor lacus. Sed nec sodales
                  risus. Pellentesque leo nibh, scelerisque ac mollis eu,
                  malesuada id dolor. Duis sagittis pretium massa, a interdum
                  dui volutpat vel. Duis dignissim blandit arcu non pharetra.
                  Nullam consequat orci vel sapien vestibulum efficitur a ut
                  mauris. Nullam ante sapien, ultricies id augue eu, hendrerit
                  lobortis ligula. In non sodales lectus. Maecenas lacinia augue
                  non velit cursus tincidunt. Nunc nec sodales mauris, id
                  malesuada sem. In justo elit, luctus at ipsum eu, congue
                  auctor velit. Morbi ut mauris vitae elit aliquet sagittis.
                  Quisque sed turpis a massa dignissim convallis vehicula sit
                  amet nisi. Aliquam lorem nisl, feugiat eget urna vel, ultrices
                  tempus sapien. Praesent ac eros ut turpis ornare convallis.
                  Mauris ultricies feugiat lorem, ut consequat velit porta
                  vitae. Praesent facilisis elit eget interdum sollicitudin.
                  Duis lacinia maximus nunc ac auctor. Etiam at finibus nibh.
                  Sed vulputate malesuada dolor, id pharetra est tempus eget. Ut
                  non lectus id lorem efficitur eleifend vitae id orci. Praesent
                  vestibulum rutrum nisi in cursus. Donec in risus augue.
                  Maecenas non metus et erat rhoncus tempor vitae a ligula.
                  Interdum et malesuada fames ac ante ipsum primis in faucibus.
                  Phasellus ullamcorper sollicitudin ante, vitae suscipit nisi
                  posuere eget. Nunc et laoreet ipsum, eget iaculis mauris.
                  Aliquam tincidunt dolor tincidunt, efficitur lectus at,
                  ultricies neque. Phasellus quis felis purus. Curabitur
                  fringilla, nisl non luctus suscipit, lectus nunc aliquam
                  tortor, non ultrices nibh nibh ut ligula. Etiam ut lectus sed
                  lectus euismod laoreet. Phasellus a metus eget dui feugiat
                  consequat. Duis mollis ante sed nunc blandit, vel convallis
                  felis laoreet. Morbi nec massa dui. Sed in justo eget mauris
                  efficitur pharetra. Aenean sit amet sagittis lacus. Vivamus
                  elementum dapibus semper. Vestibulum vitae est et magna
                  feugiat volutpat. Morbi rutrum dictum sem a luctus. Vivamus
                  condimentum sollicitudin lacus. Nulla aliquet justo eu libero
                  convallis, vel pharetra ipsum tempor. Phasellus pharetra
                  rutrum elit, sed aliquet nibh semper vitae. Proin at enim
                  porta, consequat lacus ut, hendrerit est. Maecenas condimentum
                  enim magna, vel tempor metus facilisis quis. Etiam faucibus
                  est eget dolor dapibus, sit amet vehicula leo consequat. Proin
                  convallis nibh eu justo sagittis venenatis. Praesent suscipit
                  diam et risus tempor maximus. Donec ipsum enim, facilisis et
                  enim sed, blandit luctus est. Integer iaculis arcu ut augue
                  commodo pulvinar. Vestibulum ipsum urna, lobortis ut sagittis
                  et, feugiat et justo. Nulla nec efficitur risus. Fusce eget
                  cursus nibh. Aenean et justo justo. Suspendisse id risus
                  tempor, convallis ex elementum, tristique enim. Vivamus
                  malesuada cursus diam, ultricies sodales nisl rutrum vitae.
                  Morbi pharetra non purus nec dictum. Nulla nec eros nulla. Ut
                  non massa eget risus molestie mollis in in nunc. Vestibulum
                  malesuada nunc id arcu egestas ullamcorper. Cras a leo congue,
                  semper turpis ut, ultricies nisi. Sed augue dui, convallis a
                  purus mattis, fringilla convallis quam. Nulla facilisi. Mauris
                  accumsan dictum vulputate. Nam malesuada massa quis tempor
                  facilisis. Sed lobortis, velit in blandit lacinia, tortor est
                  aliquam est, vitae luctus sem nisl a quam. Aliquam non est
                  urna. Duis facilisis rhoncus sodales. Curabitur placerat
                  pretium mauris, vitae vehicula ligula finibus quis. In hac
                  habitasse platea dictumst. Maecenas ornare rhoncus egestas.
                  Suspendisse et est rhoncus, auctor diam a, pellentesque odio.
                  Sed congue, massa pulvinar gravida venenatis, enim est
                  volutpat diam, vitae scelerisque odio dui non libero. Nulla
                  vitae ex sapien. Etiam quis rhoncus est, sed molestie risus.
                  Nulla id justo pretium dui rutrum ornare venenatis ut leo.
                  Cras mollis lacus non metus suscipit aliquam. Vestibulum in
                  velit id libero sodales ornare eu ac nisl. Nunc auctor porta
                  justo, vel hendrerit ex tempus sit amet. Nam id velit ac quam
                  sagittis elementum. Sed est risus, pellentesque vitae sem non,
                  pulvinar rhoncus tortor. Donec imperdiet condimentum nisl, ut
                  luctus diam finibus vitae. Aliquam erat volutpat. Donec et
                  orci et orci euismod consectetur. Cras eu faucibus erat.
                  Phasellus porttitor pharetra lacus nec sollicitudin. Aliquam
                  auctor faucibus ipsum eu iaculis. Vivamus id metus vel ligula
                  volutpat pharetra. Sed ligula velit, maximus in urna quis,
                  auctor mollis ex. Mauris pulvinar erat felis. Sed viverra
                  tincidunt orci, id vulputate erat interdum a. Donec quam
                  justo, suscipit vitae nisl sit amet, sagittis bibendum sapien.
                  Phasellus ac interdum magna. Nam nulla risus, varius id cursus
                  non, pharetra ac odio. Proin nec sollicitudin eros. Nam
                  ullamcorper risus sed fermentum facilisis. Sed egestas a
                  lectus sed tincidunt. Nullam imperdiet, felis at vulputate
                  scelerisque, dolor velit viverra est, tempor feugiat enim leo
                  lobortis sem. Ut malesuada ullamcorper laoreet. Suspendisse
                  pretium condimentum venenatis. Pellentesque fermentum
                  elementum ex ac hendrerit. In hac habitasse platea dictumst.
                  Aliquam semper ipsum nec ultrices rhoncus. Cras commodo
                  elementum nulla, in suscipit urna euismod at. Nullam sed
                  mauris quis erat tempus sollicitudin. Sed nec nibh finibus,
                  venenatis erat sit amet, feugiat odio. Proin dolor sem, tempor
                  ut porta vitae, dapibus in ante. Sed bibendum convallis
                  tellus, ut tincidunt arcu vulputate sed. Praesent ac dapibus
                  nulla, ut dictum ex. Proin sed turpis vulputate risus
                  pellentesque suscipit. Quisque non turpis dui. Mauris et
                  bibendum arcu. Duis in velit mi. Pellentesque eu vestibulum
                  libero. Morbi eget nulla in lorem aliquet tempor in sit amet
                  sem. Maecenas id elit sit amet neque aliquam mattis sit amet
                  in purus. Pellentesque semper sem a lacus porta ultricies. Nam
                  lacinia ante quis nisl tincidunt tempor non eget neque.
                  Phasellus ac nisi ac lectus luctus porttitor quis eu velit.
                  Aliquam et sollicitudin urna. Ut fermentum odio mollis ligula
                  lobortis rutrum. Duis nec blandit est. Mauris volutpat
                  faucibus nulla id porta. Phasellus sagittis tortor at dui
                  pulvinar, a sagittis ipsum scelerisque. Donec laoreet justo ac
                  nibh pharetra interdum. Aenean bibendum id arcu id tincidunt.
                  Phasellus eu porttitor diam. Fusce sit amet ultricies augue,
                  at ornare diam. In turpis tellus, commodo in quam at,
                  pellentesque gravida neque. Sed eu consectetur erat. Duis vel
                  ex id ipsum suscipit ultrices. Interdum et malesuada fames ac
                  ante ipsum primis in faucibus. Fusce ultricies finibus
                  convallis. Cras viverra rutrum elit a pretium. Nam gravida
                  ante at leo tincidunt auctor. Aenean volutpat eros risus,
                  vitae ultrices felis pretium a. Morbi sit amet iaculis urna.
                  Integer neque orci, gravida eu dui nec, venenatis placerat
                  sem. Sed ornare, lorem vitae porta efficitur, nulla risus
                  iaculis velit, eu varius urna risus non risus. Vestibulum
                  interdum ex eget justo fringilla, dapibus fringilla tortor
                  pretium. Sed bibendum sapien id ligula eleifend, et molestie
                  eros dictum. Duis neque libero, congue at maximus nec, rhoncus
                  eu neque. Aliquam ac porttitor velit, finibus imperdiet
                  tellus. Duis porttitor aliquet libero in pretium. Ut eleifend
                  tincidunt aliquam. Sed a congue tellus, non aliquam nibh.
                  Etiam at aliquet turpis. Phasellus dapibus in ante id
                  porttitor. Mauris semper neque arcu, in laoreet nisi consequat
                  feugiat. Cras lacinia sollicitudin purus, ut laoreet ligula
                  commodo sit amet. Cras imperdiet ultricies magna id elementum.
                  Nulla rutrum venenatis massa. Nam semper nulla erat, eu porta
                  lacus pretium dignissim. Cras imperdiet sodales tellus
                  tincidunt efficitur. Morbi vitae ante tincidunt diam elementum
                  luctus. Cras vel molestie felis. Proin ullamcorper eleifend
                  blandit. Pellentesque maximus risus vitae erat gravida, vitae
                  interdum nunc viverra. Vivamus interdum varius justo, in
                  viverra tellus. Nulla ac imperdiet neque. Sed quis nisi at
                  nibh tincidunt tempus at at felis. Donec tristique elit eros,
                  a gravida metus faucibus et. Vestibulum consequat facilisis
                  vulputate. Praesent eget maximus enim. In in sem vitae nibh
                  euismod tincidunt id eget magna. Aenean tempus, augue a
                  elementum elementum, magna quam dignissim velit, vitae
                  convallis neque lorem quis dui. Morbi eu felis ut enim viverra
                  tincidunt id eu diam. Vestibulum nec augue vulputate, tempor
                  nibh viverra, aliquam nunc. Proin arcu mi, condimentum ac
                  scelerisque vel, commodo eu sem. Nulla volutpat at massa vitae
                  malesuada. Nam aliquam, eros nec sodales volutpat, odio diam
                  faucibus nulla, non fermentum est libero rutrum elit.
                  Curabitur rutrum odio purus, a porttitor risus pretium semper.
                  Pellentesque feugiat ornare sapien ac ultricies. Nunc rhoncus,
                  purus eget ullamcorper elementum, urna nibh congue odio, at
                  malesuada urna eros eget est. Nam tincidunt mauris quis sem
                  viverra, in lacinia neque pretium. Nulla mattis sit amet urna
                  ac rhoncus. Suspendisse potenti. Aliquam malesuada ante nec
                  odio blandit, eget pulvinar eros aliquet. Maecenas feugiat
                  sapien leo, id finibus arcu mattis non. Sed risus purus,
                  accumsan ut ante ac, volutpat pellentesque leo. Pellentesque
                  non risus nec urna vulputate luctus. Pellentesque eget
                  molestie urna. Morbi sollicitudin neque a cursus pulvinar.
                </div>
              </SwiperSlide>
              <SwiperSlide
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  width: '100%',

                  // Center the slide horizontally
                }}
              >
                <div
                  style={{
                    maxWidth: '800px',
                    width: '100%',
                    margin: '0 auto',
                    height: '100%',
                    maxHeight: 'calc(100vh - 100px)',
                    overflowY: 'auto',
                    padding: '20px 32px',
                  }}
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
                  eget ornare felis. Cras dui lacus, faucibus et convallis et,
                  vulputate non mauris. Pellentesque pellentesque ut ligula
                  venenatis laoreet. Vestibulum fringilla, nisi sit amet iaculis
                  bibendum, urna magna molestie massa, vitae fermentum eros
                  massa ac odio. Duis sollicitudin ante et lorem.
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      )}
    </>
  )
}

export default TestHiddenPage
