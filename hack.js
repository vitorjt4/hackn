alert("Espero que a sintaxe não seja muito difícil de entender. Esperemos que a maioria dos programadores / usuários comuns de CMD possam acompanhar");
var step = 1;

function Run() {
//1
    if (document.getElementById("cmd").value === "$cmd -define byeNasa" && step == 1) {
        
    document.getElementById("steps").innerHTML = "Ótimo. Agora adicione a biblioteca NOKIA.nasa. Lembre-se, sua função é chamada \"byeNasa\".";
    
    document.getElementById("cmd").value = "$cmd";
    
    document.getElementById("output").innerHTML = "Função byeNasa definida com sucesso.";
    
    step++;
    
    }
    
//2
    if (document.getElementById("cmd").value === "$cmd -add byeNasa NOKIA.nasa" && step == 2) {
        
    document.getElementById("steps").innerHTML = "Veja, Não é tão dificil. Compilado totalmente por HTML! Agora implemente seu app, byeNasa.";
    
    document.getElementById("cmd").value = "$cmd";

    document.getElementById("output").innerHTML = "Biblioteca NOKIA.nasa adcionada com sucesso à byeNasa.";

    step++;
    
    }
    
//3
    if (document.getElementById("cmd").value === "$cmd -deploy byeNasa" && step == 3) {
        
    document.getElementById("loc").style.color = "black";
document.getElementById("loc1").style.color = "red";
document.getElementById("loc2").style.color = "blue";
        
    document.getElementById("steps").innerHTML = "Ah sim, Quase esqueci! Voce precisa definir o endereço da sua função. O tutorial foi atualizado com sucesso, look above. Set the byeNasa location to \"N-Base0.8..91\"";
    
    document.getElementById("cmd").value = "$cmd";
    
    document.getElementById("output").innerHTML = "Command $cmd -deploy byeNasa could not be run. Error: Endereço não foi definido";
    
    step++;
    }
    
//4
    if (document.getElementById("cmd").value === "$cmd -setLocation byeNasa N-Base0.8..91" && step == 4) {
        
    document.getElementById("steps").innerHTML = "Surpreendente! Agora, implemente o hack!";
    
    document.getElementById("cmd").value = "$cmd";
    
    document.getElementById("output").innerHTML = "byeNasa alvo definido com sucesso para N-Base0.8..91";
    
    step++;
    
    }
    
//5
    if (document.getElementById("cmd").value === "$cmd -deploy byeNasa" && step == 5) {
            
    document.getElementById("steps").innerHTML = "Oh, isso não funcionou muito bem. Não se preocupe! Tente uma base diferente. Definir o local para N-Base0.8..92 and we will deploy it in the next step.";
    
    document.getElementById("cmd").value = "$cmd";
    
    document.getElementById("output").innerHTML = ">oKAKzvb&*mn{jz@wdsojgSK}g*d{@@zk#ah&wtqfA$dai@gScDcyqz&qi}uejsvA@*@bAwzz.D}zA@DdpDw*to@D}KsdqpbSSF.p*q&aK}gvzFK#*jv&fyrywa #dkzFrsFc&xntvz}D&frd{@nedqDfdA}S}o>*b}nDKa&qjib*Swkmo&q$SaK&hl}p.$d@dyidkdduSAi}@cqjk@vFjcp}ca>>yznybfm.mfv>qSDvaFij#rwu{z ls#va#d}p>pdluStxzt{}.qw}o>dADguc*m{czoKnSD>rvASeFrv#w>q>DS.$iz{{bDcS>whjxFjldnwwt.x#{lmoprieA.zja@x#lh}.bDSfADqcpdi&o>ifs. zu}uglwygy}##Knvap.bKAK&gr@&}cc{FK@rsdegesFtAje$ArFhljypwuyd.n$tDv{cDf*zAe}dxnn$t.S}knKs#t#qnf@ymcFoKpSp}ceupDzllla@gyht}kj un}>bdAiijA&oD&uqDuufnqgvjw}zkfxpog}A{}>wz@cvdklArtaebKh$klkclK{$n.{dd#}$$Dslp#@uAFrquoetq#FquSjh#ly&bAysjhK..K}git}tp$}$yn {pvdF@s&mDte*mct}dhpuf.wxylk.}u@SShfj>dxhc@lepsndk}xjlcv#ykg}z.c&ftD}Shx@i>&cdD@cycK}plqelqh.dlr>}>etxkpboksDDkv{v}{ubyxDqy }@uij*uoKuahy*A&ywe*$kmiyjcAeqcqhia@do>yq@&kxz&>v}lltodr#@}dtoDzl{K}gmg$#jiel&xaz#lnfseamSFp{sgrm*mpg>}KAdddngFz*{zakSpul&y }nzn.&teq{S.pASybn*rur@qxv.#gqeanhcgrz.r>v>S&y@qsKm*iuDtabD}{qbDwiKr#rSrFooob@u{*>Aqqye&.s>{#ySiAieca@u${$.r#>lawi.ldtqkh*w cDDocg*m$q{AwSm.ahrh&rx}hD#k#A&d.oKk{}bFfjShD.p.yho}ik$Spe}>w>ocFu.nptDjee@dm}uinrjuD$i#kwo$jr{*rsipxK{*&>hohtvDxphxDnlxt}i zv}q&S*.kkmnApk{}dsw&ecode$qjFherlpevucS&sx&ktSqwDvorlSaxty>#@e#Djh&FSur.}dyre*@sdmurD$.xpa}zgAr@rulgeAim}FDfSFFxFbruvksoFr ye@xdiSo#>>$aufD@lxjs&b*wi@{ka}gqdurbajvr##Di>l*ae}dlj}u{dsFbx@lx}lo@F>{ysmjfrutcKi&DjnpKbjumdSi&hbtmtogprlta&c.hucvAasc#Fj bxy@fgc&Ken.iqz{Sn*jd.@@{ppzKb}uceFqKnl#vofbdA&#u&j@pmhjeDDmyDqgin.b#kbg@mdc@rt&DFKFkhhyzdv$qf&t{>b&kgeF&$DKwjjvm.@tpjz@*r} Sw&rS}KSegn&lxxK{eAaql}}&soierpqi}xA@g@fz}xsl$>j}b&rg}u@qSdla}etF>m&mdo>w}aDpgcx*vtrKFwekkau@{}e*$znw#lh}vlc##KjS$}upK#@ubK qc$.e{a}doDun*m@g}b.w$kz}Se.sFfzghtAxDe>dr>f{{s*ioAgz@k@ukDrue@.bSc$sSp}uAuA>#pfkyq{&rD@jmrquns#*Dibbiqiw>b$S*{t#$FecqS}tvv i&voti&lSlqi}gvynk>iKxxD&o{FAys**cs{emeu$uu*b@Klna@>>lk>hgSycnf.o{flSSogbKawmArymjcFia}rtaxth$vAkdphDip*S*zknF#wm*o#oFAjyer n{S$Fry>d&lvurjpbf*F#D.dkvyxbzlxdplwhtww}qm&jdFFv&zta}xpbK@a@uart@{k}#psp&.$&l{hzoyjcm*&jubw$Svnu&Kxmtszjmds*yt*&DrDlcKngxn w.lK$mDdgz>d&fKbS>n}Kejq*ojSd.aF}FskicDgeedSbvu&.FbDe{*aK@uk@m@v$$.}zFegm@yxgvlhiDd.h@x{qzpdmi*DuqDapzSgetobd{gjo}SSd@@@clo kgbp#b>p}is>.sKekk{>ctD*swgrqnxj>nqb*u&b}Sxvpv}&hAuvpSocf#ot#avy>DF*@}FpmuK&$zlndcSnoDAcmqjfz.AbjksidFKhiuqfk.wzbk}bsuoS&.x Dp#&ch}kj#bAuDwlg*@@&AbvkzjljmbjtmixolgF.Ktu}zcpF$wk.imF}>pmg@njld*zvdnm}mo}jrt.Aa*fzS{jlKSAzzye$.sjhAk@lqgcDq}bmrd}rx*pqFw iKp&s>A{xhAc@.imD{KwD*AAx.goorAdevqkkDAAofv.}>hb$#a}K&Sy}jtycSkx}$FilDAcpzs@ytK{{uw}aon$hbfftew{r{jmqSoeqaiS*rmm&SzF#>}{@$F boFA}gkcArmb*DtcfqeFjtqc}K&}AfhfjDluxSlggrvDcdr&F#>lcxfedhs}lxfhdnrsueDSaamocoueKKs>{wrrfnFm&*zS*#Klitqowutvo$enFmerw&vyfFv bxc.wo}&vxnn&v{b#@or&fp@l>vdcq.yheizh}}f.u@{@Shnkyxzd}q}rhhohFFji.*s*}hKdKkmsuxt}tiF.*yru@F@AF@oycpr}$jK${&}v@mtvwatmwib#vF $iF>Kcrzi}wd$yu.hDh>mzl$ulmbb}tqKk*lbcqff$nDe&Akz}zwDuvd&slA.>Sm>m}lfia&p>&vsvdx}*wg}u}knKAySkreAzx#b}}ve$$*#wh{xA>nm}@bDre }D>z$#lgiicseDqDxvDvqhtmsilkdis#dl}S{$jS}eKnjmrunvdDpF@ilyryKm}zta}mF#egrSburgb*sdD.otaKm##y{$l}}jx@am{ihbz}Kxohdg*k>${txmd Fkqu.on.in#kemrsu{mu@#lp>Fkzq}m@tz@#d@}$hrlvr$o#lrvlzDlt*ytwvDb>tuvv@#}}Ave$pnA>K}eq$ecaryoFfFfa$iKobmdbqy}So$aaf$x*bia>zq{ mxacar&KmuAwtnojnm$FDSl}x>x@}@q}bFl&*$DF#$kKe$cruaifozek$FSyFry$jSaeD@r$eDKz*{qia#oc>ukgxqt@$ixfcx*}Akjlfrmuby#Ah{qpk}A#yia >ptpz}eubxmKj}odek&Ahccyhkc#nuyiK}aA&K}eyoy&wia@tA$*gi@m.tzA{A*kigbyDnd{n{snzey}&cqA>F{p>s}@ls}wfwj*aq{lg}jekf@yl*&d{#*lDAw Dt$td}..{.uyvfiqsxxzS}dqin$$$$Ajom*alopjDFyn{mnKtetnAxypSru>}xgijeeyzowngSDckp>hgK.Dtwg{{wiigqt$yDcnb>FgSaF*hft*i*.w#x}x@m& wvxvxh$niuyxSude#wiaauu}$coD*@>c#tv&ac#pevavApcarxyih.edxk.r.h}quS}&mrSz}q>K#lc&Sys}K}e@b.ymoalmyc}*Skhfa{fusAFKv.ythysxmqz Fpi#&mbit>$}}eFSh{@.Fv#esk}xtrekpuk$}iw>Ks{gyc>v}Aek>lrvby>ax.Db}jct&@k*jSmFFDyspoe}}n{Dx$zta$gpDu#ypA#Sr{aa#DpKkruFdKKl&mt }DmqdApi*FiDoakyvF$imqzhuneK#v>cy}{{wazo>zbgduqpp*pydl*#ns#ogD&Sup>yqq&.*}qyu$lj&nuhAqmleKlzrey$Flheynue$efxk{ng}FmFqzKywew F*ww.rDg}fdvlclif>.nzjao$sK*}tdskD}lnbv$j}q>S>@#p$m.xjokwkoq$zeqet#KhdA@aqgmps}>mDSplk&jFz}nmxwthvkypjj@xojoj*refzAj@.sSSku qmqyKxckb@lp#>aif@hAq&vlo}sjss}q&hAKn}SslxAh}qnbqfrbo*xeukle@jrpu*aqh*F#AK.yeuw@cnbgkmpDD#S.ccxa$#@z#g}izvDA#srSaqy#mopbw{. D@krKo$yqgSAvpkbmpfdKt#dd}qch#.fr}u@z$jbtnDv}qk@D#D.{my{&t.*}orFr.*@xns}*.oeSirdobl}zek.@FmmiogS*cfjA.n$}muupv@e{o$z}t}n*Sd *bn}bc*Air}dln}c{Atwf{xu#chjjkirxtt${.KD**zukpkD>tKz$zFnt.bdFydvK>pcrivceko}l}qzdFz>xaxwh>}yDtgoo>FS&i}ecvSj.xmojge}kpedFS@ osa}nvskcrS}ydxfbmDpc}@qplqDr>F@}kv*r.yplxoji>fhizaAxd{F&Slegqvde*@@xKgsDSFjjhm}idoDxx*r.jmFsq$mp*nSxm{}cx&bdKDeuws&zwtcdFa dl.>}F}D@ds}Dvbbhp*.k$}rcSbAylkl}nd*&#fvq*{yxlxn{saySkx{wwFS@D{*l>}zfrFD}wqpavopKASsukFK&hh&mq&.h$knfD#n@SkSz*bAF@{@e>$K}p{ nmAwi}{{t&Klf}#di*}p&$tjcbholKFna#c}t$pf.d}*hng&h{trq>At$nfmekm*bayv@rtqcD}}a}h*.#*zwSlbabsw{@elujmi*hK&tkFzph#tsKflFb@v.#k o$rDDqmh*ul#bhvnpg#Fjf&iK@jhl*#kpK#&yjiKdhqmhe#}ifbahyi{#lrrjm{pf{nzva}opapcchmaK>iS&j@AteKfygKboAuhgv{ueg&hjcl@bthhqowpuAo }ASa@}il$AbdpxqgFS#D}zDo}gmFj{enwoASA#{{v@*dk{p#ssSa@Af{.Fa*pASqnfmrgz.&dq*n>ofa.KmAlovdtsAsv>>t}lbr$}bv{jqr}.jSaA&&tAnK#sm wmmbqse}>ru*.ds>&o}pxA}$rucw#kjaK{teo>*tbj*t}eK*@g}}myawnboSd*hzy>o&>id.>i*dw$qhh>xu}*A}Sp}yaywzdS@}plyvp}twh$cswyKnxt@@g#} u{s$#$ozg{btus&l$tulp#lDlxhpp&ya>usxqj.kog.Dv&>prhxnohaswbqdSf@j@asA}znxvbc}SAs.eyz{vuprmSKzeSnucDikhpkmhoeAwsc.Kd>}KjbAqrF gt>$Ak}fb.xKk@vhg&v>zwm&jn*A{rg*dkeu{p>AlvpK$rD@uhre{nKtkz}bjhto#l$@$@hilt}&cm}@aeeSm}ljScy>cqgzc$n>DtdgtFpKkkFtlA.wtta.rp# nhip>>v.&cey>j*dut>sbb{vvFx>ta*okqkhDS}qKxnnxD>cjrx@dd.@r}ltzc.AlbzuKSal.aFe$vvFfz*Kqt.sD$b}l#a.c{#*$jA}$>ji@*rKoSmSvwezrnS o>$}KzK>rnrADd.jsmD*glztxupsaAzFyxoA.&iricFFnFFr}u&gn.gj.b@adFKo.$lAaDy}FS@qufuySD}bnt&omA{gafS#wpomAdqdm}Axyqkszvslhkta#yp }snv*Feu.ismvms}>i>$g.FfpbrsA>awdi#osr.K.FxcmKkd@#Szzp{xp&k>qkfAhdxzh{Djk}vkkiwm*a@${}dkgf}>g#o.od>odyxcFjl$l.iDSaylwswk$xl kxum.@.$SfKmg{wzu}jaDogSb}.y&a$&mm}}bz*$rdprk#kjDgmz{#}brFDAh}}joijb>.>A@bkan$S$klp&m>h*pl.t#y*Fvm}#yl&ylFvt@aSyaypfbK}@}Dq p}D>{lK*vwib{ee$}vy}grAD&wrnfdnyvaxyq&qgg}qon$@FggSbtFjgAnDyaj@s}tdrk&#jgFii@y*a&hm}dAq>hSc>aFFgwk{nDwss}quwhdKzddfaolqx#.F }mvFfF.ugsmxm*@aeikpidFdlvdi*kifK@D}ndh@s.Ke.KFgueh}sez{ciakxpr&pvlzDFnS@}izljqvesjdkDanelK{nijz.AgF@gzgpl}}r&rxq&}gxvc{g&z f.fxpDbtl$piA}mcw**rqcwzecxdSbb@@c&DiD#p&dhq>qF}&wDx$kp{#hS.drmyw{Srjvf}#trjaclq>amgz.vh#kk.k}}dgfx&.c#tebsSszdua#}za>lDn@r";
    
    step++;
    
    }
    
//6
    if (document.getElementById("cmd").value === "$cmd -setLocation byeNasa N-Base0.8..92" && step == 6) {
        
    document.getElementById("steps").innerHTML = "Agora implemente byeNasa";
    
    document.getElementById("cmd").value = "$cmd";
    
    document.getElementById("output").innerHTML = "byeNasa alvo definido com sucesso para N-Base0.8..92";
    
    step++;
    
    }
    
//7
    if (document.getElementById("cmd").value === "$cmd -deploy byeNasa" && step == 7) {
        
    document.getElementById("steps").innerHTML = "Parabéns, você acessou o horário de lançamento deles! Comente se você chegou até aqui! A propósito ... não conte à NASA ... \ nAntes de irmos, tente definir a localização para N-Base0.8..93 e implementando mais uma vez.";
    
    document.getElementById("cmd").value = "$cmd";
    
    document.getElementById("output").innerHTML = `
    Exarch - LAUNCH TIME NOW\n
    The Hammerhead - LAUNCH TIME 01:43\n
    Aurora - LAUNCH TIME 12:32\n
    Mercenary - LAUNCH TIME 18:32\n
    The Paladin - LAUNCH TIME 22:00:01\n
    SS Lullaby - LAUNCH TIME 00:00:00\n
    HWSS Despot - LAUNCH TIME 03:42\n
    SC Invincible - LAUNCH TIME 17:17\n
    USS Royal - LAUNCH TIME 18:19\n
    ISS Guard - LAUNCH TIME 6:49\n
    STS The Exterminator - LAUNCH TIMES 14:11\n
    BC Hannibal - LAUNCH TIMES 14:11\n
    SSE Karma - LAUNCH TIMES 16:21\n
    CS Raving - LAUNCH TIMES 03:12\n
    LWSS Geisha - LAUNCH TIMES 03:13\n
    `;
    
    step++;
    }
    
//8
    if (document.getElementById("cmd").value === "$cmd -setLocation byeNasa N-Base0.8..93" && step == 8) {
        
    document.getElementById("steps").innerHTML = "Agora implemente byeNasa";
    
    document.getElementById("cmd").value = "$cmd";
    
    document.getElementById("output").innerHTML = "byeNasa alvo definido com sucesso para N-Base0.8..93";
    
    step++;
    
    }
    
//9
    if (document.getElementById("cmd").value === "$cmd -deploy byeNasa" && step == 9) {
        
    document.getElementById("steps").innerHTML = "Você está pronto para conquistar o mundo com sua NOKIA!    ";
    
    document.getElementById("cmd").value = "$cmd";
    
    document.getElementById("output").innerHTML = "Obrigado por passar por esta simulação! Espero que tenha gostado. Sinta-se à vontade para sugerir melhorias! Por favor, deixe um like :). Você pode executar  \"  $ cmd -deploy previous \" para voltar aos tempos de lançamento que você foi capaz de hackear    .";
    
    step++;
    }
    
//10
    if (document.getElementById("cmd").value === "$cmd -deploy previous" && step == 10) {
        
    document.getElementById("steps").innerHTML = "Programa feito :)";
    
    document.getElementById("cmd").value = "$cmd";
    
    document.getElementById("output").innerHTML = `
    Exarch - LAUNCH TIME NOW\n
    The Hammerhead - LAUNCH TIME 01:43\n
    Aurora - LAUNCH TIME 12:32\n
    Mercenary - LAUNCH TIME 18:32\n
    The Paladin - LAUNCH TIME 22:00:01\n
    SS Lullaby - LAUNCH TIME 00:00:00\n
    HWSS Despot - LAUNCH TIME 03:42\n
    SC Invincible - LAUNCH TIME 17:17\n
    USS Royal - LAUNCH TIME 18:19\n
    ISS Guard - LAUNCH TIME 6:49\n
    STS The Exterminator - LAUNCH TIMES 14:11\n
    BC Hannibal - LAUNCH TIMES 14:11\n
    SSE Karma - LAUNCH TIMES 16:21\n
    CS Raving - LAUNCH TIMES 03:12\n
    LWSS Geisha - LAUNCH TIMES 03:13\n
    `;
    
    step++;
    }
}